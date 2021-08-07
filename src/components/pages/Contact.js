import React, { useState } from 'react';
import { validateEmail } from './helpers';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  }
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    };
    if (inputType === 'message') {
      setMessage(inputValue);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !message) {
      setErrorMessage('Please enter a valid email address and a short message.');
      return;
    }
    alert(`Sorry! This form isn't functioning at this time. Check back later.`);
    setMessage('');
    setEmail('');
  };


  return (
    <section id="contact" className="row">
    <figure id="contact-info" className="column col-sm-5">
      <h2>contact</h2>
      <p>
        If you'd like to get in touch you can fill out the form below.
      </p>
    </figure>
    <div>
      <form className="form" style={styles.form}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email address"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button className="btn btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

  </section>
);
}
