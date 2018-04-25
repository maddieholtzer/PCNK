import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as firebase from "react-native-firebase";
// import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    user: null,
    phoneNumber: "",
    loading: false,
    confirmResult: null,
    confirmInput: "",
    message: ""
  };

  // ComponentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyCBLLZ1-9Lw2af6VRBZi4xcuS9ZCXTWBG8",
  //     authDomain: "pcnkflex.firebaseapp.com",
  //     databaseURL: "https://pcnkflex.firebaseio.com",
  //     storageBucket: "pcnkflex.appspot.com"
  //     // messagingSenderId: ""
  //   });
  // }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: "",
          codeInput: "",
          phoneNumber: "",
          confirmResult: null
        });
      }
    });
  }

  signOut = () => {
    firebase.auth().signOut();
  };

  onButtonPress() {
    const { phoneNumber } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult =>
        this.setState({ confirmResult, message: "Code has been sent!" })
      )
      .catch(() => {
        firebase
          .auth()
          .createUserWithPhoneNumber(phoneNumber)
          .then(confirmResult =>
            this.setState({ confirmResult, message: "Code has been sent!" })
          )
          .catch(this.onLoginFail.bind(this));
      });
  }

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.setState({ message: "Code Confirmed!" });
        })
        .catch(error =>
          this.setState({ message: `Code Confirm Error: ${error.message}` })
        );
    }
  };

  onLoginFail() {
    this.setState({ error: "Authentication Failed", loading: false });
  }

  // onLoginSuccess() {
  //   this.setState({
  //     phoneNumber: "",
  //     loading: false,
  //     error: ""
  //   });
  // }

  // renderButton() {
  //   if (this.state.loading) {
  //     return <Spinner size="small" />;
  //   }
  //
  //   return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  // }

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Text>Enter phone number:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={"Phone number ... "}
          value={phoneNumber}
        />
        <Button title="Sign In" color="green" onPress={this.onButtonPress} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: "#000", color: "#fff" }}>
        {message}
      </Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={"Code ... "}
          value={codeInput}
        />
        <Button
          title="Confirm Code"
          color="#841584"
          onPress={this.confirmCode}
        />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#77dd77",
              flex: 1
            }}
          >
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
