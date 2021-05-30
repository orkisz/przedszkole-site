import React, { useCallback, useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import MainLayout from '../layouts/main-layout/main-layout';
import Header from '../layouts/partials/header';

const EMAIL_REGEX = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])$/;
const BODY_MIN = 10;
const BODY_MAX = 1e3;
const NAME_MIN = 3;
const NAME_MAX = 50;

const Contact = () => {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [bodyTouched, setBodyTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleVerify = useCallback(token => {
    setToken(token);
  }, [setToken]);

  const emailRegexValid = !!email ? EMAIL_REGEX.test(email) : true;
  const bodyLengthValid = !!body ? (body.length >= BODY_MIN && body.length <= BODY_MAX) : true;
  const nameLengthValid = !!name ? (name.length >= NAME_MIN && name.length <= NAME_MAX) : true;
  const formValid = !!email
          && emailRegexValid
          && !!body
          && bodyLengthValid
          && nameLengthValid;

  const submit = async event => {
    event.preventDefault();
    setSubmitting(true);
    setIsError(false);
    const formVal = {
      name,
      email,
      body,
      token
    };
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        body: JSON.stringify(formVal),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
          <GoogleReCaptchaProvider
                  reCaptchaKey="6LerEtoaAAAAAEm-6Qvq5OBvOoZMcEzuORP3Z7sQ">
            <MainLayout>
              <div className="container">
                <Header title="Kontakt"/>
                <div className="columns">
                  <div className="column is-6 is-offset-3">
                    {!isSubmitted && (
                            <form noValidate
                                  onSubmit={submit}>
                              <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                  <label className="label"
                                         htmlFor="nameControl">Imię
                                  </label>
                                </div>
                                <div className="field-body">
                                  <div className="field">
                                    <p className="control">
                                      <input className={`input ${nameTouched && !nameLengthValid ? 'is-danger' : ''}`}
                                             type="text"
                                             id="nameControl"
                                             value={name}
                                             onChange={e => setName(e.target.value)}
                                             onBlur={() => setNameTouched(true)}/>
                                    </p>
                                    {nameTouched && !nameLengthValid && (
                                            <p className="help is-danger">
                                              Pole powinno zawierać od {NAME_MIN} do {NAME_MAX} znaków
                                            </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                  <label className="label"
                                         htmlFor="emailControl">*E-Mail
                                  </label>
                                </div>
                                <div className="field-body">
                                  <div className="field">
                                    <p className="control">
                                      <input className={`input ${emailTouched && (!email || !emailRegexValid) ? 'is-danger' : ''}`}
                                             type="email"
                                             id="emailControl"
                                             value={email}
                                             onChange={e => setEmail(e.target.value)}
                                             onBlur={() => setEmailTouched(true)}
                                             required/>
                                    </p>
                                    {emailTouched && !email && (
                                            <p className="help is-danger">
                                              Pole wymagane
                                            </p>
                                    )}
                                    {emailTouched && !emailRegexValid && (
                                            <p className="help is-danger">
                                              Nieprawidłowy adres e-mail
                                            </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                  <label className="label"
                                         htmlFor="bodyControl">*Treść
                                  </label>
                                </div>
                                <div className="field-body">
                                  <div className="field">
                                    <p className="control">
                                      <textarea className={`textarea has-fixed-size ${bodyTouched && (!body || !bodyLengthValid) ? 'is-danger' : ''}`}
                                                id="bodyControl"
                                                value={body}
                                                onChange={e => setBody(e.target.value)}
                                                onBlur={() => setBodyTouched(true)}
                                                required
                                                rows="10"/>
                                    </p>
                                    {bodyTouched && !body && (
                                            <p className="help is-danger">
                                              Pole wymagane
                                            </p>
                                    )}
                                    {bodyTouched && !bodyLengthValid && (
                                            <p className="help is-danger">
                                              Pole powinno zawierać od {BODY_MIN} do {BODY_MAX} znaków
                                            </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="has-text-centered">
                                <button className={`button is-main is-medium is-rounded ${submitting ? 'is-loading' : ''}`}
                                        type="submit"
                                        disabled={!formValid}>Wyślij
                                </button>
                                {isError && (
                                        <p className="help is-danger mt-5">
                                          Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.
                                        </p>
                                )}
                              </div>
                            </form>
                    )}
                    {isSubmitted && (
                            <div className="has-text-centered">Twoja wiadomość została wysłana.</div>
                    )}
                  </div>
                  <GoogleReCaptcha onVerify={handleVerify}
                                   action="email"/>
                </div>
              </div>
            </MainLayout>
          </GoogleReCaptchaProvider>
  );
};

export default Contact;
