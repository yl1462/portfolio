import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xgenbrgo");
  if (state.succeeded) {
    return <p>Thank you for contacting me! I will get back to you as soon as possible.</p>;
  }
  return (
    <div>
      <div className="contactLinks">
        <ul>
          <li><a href="https://www.linkedin.com/in/weirui-yuri-liang" target="_blank" rel="noreferrer"
          >LinkedIn</a></li>
          <li><a href="https://github.com/yl1462?tab=repositories" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li><a href="mailto:yliang1462@hotmail.com" target="_blank" rel="noreferrer">yliang1462@hotmail.com</a></li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">
          Email Address
      </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
      </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
      </button>
      </form>

    </div>
  );
}

export default Contact