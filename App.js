import React from "react";
import { View } from "react-native";
import StatusBarComponent from "./src/components/status_bar";
import SignInOptions from "./src/components/sign_in_options";
import firebase from "react-native-firebase";
import UserProfile from "./src/components/user_profile/user_profile";
import FacebookLogin from "./src/components/facebook_sign_in";
import LoginForm from "./src/components/loginform";

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
        <UserProfile />
        <FacebookLogin />
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
