import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

function validate(name, email) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  return errors;
}

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",

      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email } = this.state;

    const errors = validate(name, email);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // submit the data...
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
        <input
          value={this.state.firstName}
          onChange={evt => this.setState({ firstName: evt.target.value })}
          type="text"
          placeholder="firstName"
        />
        <input
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
          type="text"
          placeholder="Email"
        />
        <input
          value={this.state.password}
          onChange={evt => this.setState({ password: evt.target.value })}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SignUpForm />, rootElement);