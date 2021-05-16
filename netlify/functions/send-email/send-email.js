// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const process = require('process');
const { validateEmail, validateLength } = require('./validations');
const nodemailer = require('nodemailer');

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;
const DETAILS_MIN_LENGTH = 10;
const DETAILS_MAX_LENGTH = 1e3;

const handler = async (event) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    return {
      statusCode: 500,
      body: 'environment variables not set'
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD
    }
  });

  const { name, email, body } = JSON.parse(event.body);

  try {
    validateLength('name', name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message
    };
  }

  try {
    validateEmail('email', email);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message
    };
  }

  try {
    validateLength('body', body, DETAILS_MIN_LENGTH, DETAILS_MAX_LENGTH);
  } catch (error) {
    return {
      statusCode: 403,
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

  try {
    await transporter.sendMail(descriptor);
    return { statusCode: 200, body: '' };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
}

module.exports = { handler };
