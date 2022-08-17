import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid="contact_h1">Contact me</h1>
      <div className='phone_email_div'>
        <span className='contact_email'>Email: kyledaviswx@gmail.com</span>
        <br></br>
        <span className='contact_phone'>Phone: (405) 413-0606</span>
      </div>
      <h2 className='contact_form_title'>Sumbit request</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='name_email_div'>
          <div className='name_div'>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className='email_div'>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
        </div>
        <div className='message_div'>
          <label htmlFor="message">Message:</label>
          <textarea className='message_ta' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="submit_btn" type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;