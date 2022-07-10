import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //update on change to fields in the form
  const { name, email, message } = formState;
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //   console.log(formState);
  //handle form submit

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //JSX returned
  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            defaultValue={name}
            onChange={handleChange}
            name='name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            defaultValue={email}
            name='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            defaultValue={message}
            onChange={handleChange}
            rows='5'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
