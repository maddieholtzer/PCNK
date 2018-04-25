import React from "react";
import { View } from "react-native";
import StatusBarComponent from "./src/components/status_bar";
import SignInOptions from "./src/components/sign_in_options";
import LoginForm from "./src/components/loginform";
import * as firebase from "react-native-firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyCBLLZ1-9Lw2af6VRBZi4xcuS9ZCXTWBG8",
  //     authDomain: "pcnkflex.firebaseapp.com",
  //     databaseURL: "https://pcnkflex.firebaseio.com",
  //     storageBucket: "pcnkflex.appspot.com"
  //     // messagingSenderId: ""
  //   });
  // }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true
        });
      });
  }

  render() {
    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return <LoginForm />;
    }
    const { statusBar } = styles;
    return (
      <View>
        <StatusBarComponent style={statusBar} />
      </View>
    );
  }
}

const styles = {
  statusBar: {
    barStyle: "light-content"
  }
};

export default App;
