/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import React, { Component } from "react";
// @ts-ignore
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
// @ts-ignore
const CustomForm = ({ status, message, onValidated }) => {
  // @ts-ignore
  let email, fname, lname;
  const submit = () =>
    // @ts-ignore
    email &&
    // @ts-ignore
    fname &&
    // @ts-ignore
    lname &&
    // @ts-ignore
    email.value.indexOf("@") > -1 &&
    onValidated({
      // @ts-ignore
      EMAIL: email.value,
      // @ts-ignore
      FNAME: fname.value,
      // @ts-ignore
      LNAME: lname.value,
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="padding">
        <label className="text-muted" htmlFor="fname">First name</label>
        <input
          ref={(node) => (fname = node)}
          type="text"
          placeholder="First Name"
          id="fname"
          className="text-primary form-control"
        />
      </div>

      <div className="padding">
        <label className="text-muted" htmlFor="lname">Last Name</label>
        <input
          ref={(node) => (lname = node)}
          type="text"
          placeholder="Last Name"
          id="lname"
          className="text-primary form-control"
        />
      </div>

      <div className="padding">
        <label className="text-muted" htmlFor="email">Email</label>
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your Email"
          id="email"
          className="text-primary form-control"
        />
      </div>

      <div className="padding extra-padding">
      <button className="btn btn-secondary" onClick={submit}>
        Submit
      </button>
      </div>
    </div>
  );
};

class NewsletterForm extends Component {
  render() {
    const url =
      "https://barnesnursery.us1.list-manage.com/subscribe/post?u=e337460dc7a28805085d8ebf7&amp;id=de92e1cf03";
    return (
      

        
        <MailchimpSubscribe
        url={url}
        // @ts-ignore
        render={({ subscribe, status, message }) => (
            <CustomForm
            status={status}
            message={message}
            // @ts-ignore
            onValidated={(formData) => subscribe(formData)}
            />
        )}
        />
       
         
    );
  }
}

export default NewsletterForm;
