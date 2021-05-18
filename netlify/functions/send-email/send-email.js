const process = require('process');
const { validateEmail, validateLength } = require('./validations');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;
const DETAILS_MIN_LENGTH = 10;
const DETAILS_MAX_LENGTH = 1e3;

const handler = async (event) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CAPTCHA_KEY } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CAPTCHA_KEY) {
    console.error('environment variables not set');
    return {
      statusCode: 500,
      body: 'environment variables not set'
    };
  }

  const { name, email, body, token } = JSON.parse(event.body);

  try {
    const params = new URLSearchParams({
      secret: CAPTCHA_KEY,
      response: token
    });
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
    });
    const captchaResponseBody = await captchaResponse.json();
    if (!captchaResponse.success || captchaResponseBody.action !== 'email') {
      console.error('captcha validation', captchaResponseBody);
      return {
        statusCode: 400,
        body: 'captcha validation error'
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: error.message
    };
  }

  try {
    validateLength('name', name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: error.message
    };
  }

  try {
    validateEmail('email', email);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: error.message
    };
  }

  try {
    validateLength('body', body, DETAILS_MIN_LENGTH, DETAILS_MAX_LENGTH);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: error.message
    };
  }

  const descriptor = {
    from: SMTP_USER,
    to: SMTP_USER,
    subject: `${name || email} wysłał(a) wiadomość ze strony Przedszkola`,
    text: body,
    replyTo: `"${name}" <${email}>`
  };

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail(descriptor);
    console.log('mail sent', descriptor);
    return { statusCode: 200, body: '' };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: error.message };
  }
}

module.exports = { handler };
