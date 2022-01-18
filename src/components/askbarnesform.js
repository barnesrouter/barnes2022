
import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, Label, Input } from "reactstrap";
import Swal from "sweetalert2";

//import ReCAPTCHA from "react-google-recaptcha";

class AskForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    recaptchaRef: "",
  };
  // @ts-ignore
  handleSubmit(e) {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ask Barnes",
      subject: subject,
      message: message,

    };

    emailjs.send(
      "barnes",
      "ask_barnes_form",
      templateParams,
      "user_vOc0ylPHeC2nCdyLQJAiW"
    );

    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    Swal.fire({
      title: "Contact Email Successfully Sent to Dr Barnes!",
      icon: "success",
    });
  }
  // @ts-ignore
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div id="contact-form">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <div className="flex-md">
            <div className="fifty padding">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </div>
            <div className="fifty padding">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="padding">
            <Label className="text-muted">Subject</Label>
            <Input
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            />
          </div>
          <div className="padding">
            <Label className="text-notmuted">Message</Label>
            <Input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </div>
          <div className="padding">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default AskForm;
