import React from "react";

import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase-utils";
import FormInput from "../form-input/form-input.component";
import CustonButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustonButton type="submit">Sign in</CustonButton>
            <CustonButton isGoogleSignIn onClick={signInWithGoogle}>
              {" "}
              Sign in with Google{" "}
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
