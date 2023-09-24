import React, { Component } from "react";
import "./ContactPage.css"; // Import the CSS file

class ContactForm extends Component {
  render() {
    return (
      <div className="wrapper">
        <form className="form__contact" action="">
          <fieldset>
            <p>Hey, Stranger!</p>
            <p>
              My name is {" "} 
              <span
                className="form__field field--name"
                data-placeholder="your name"
                tabIndex="1"
                contentEditable
              ></span>
                , and I want to enjoy the rest of my life without a care! I'm sure you will help me achieve this goal.
            </p>
            <p>
              This is my{" "}
              <span
                className="form__field field--email"
                data-placeholder="email address"
                tabIndex="3"
                contentEditable
              ></span>
              .
            </p>
            <p>Hope to get in touch soon. Cheers!</p>
            <button
              type="submit"
              className="button button--xlarge"
              tabIndex="4"
            >
              Send message &#187;
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactForm;