import React from 'react';
import { View } from 'react-native';
import StatusBarComponent from './src/components/status_bar';
import SignInOptions from './src/components/sign_in_options';
import firebase from 'react-native-firebase';
import UserProfile from './src/components/user_profile/user_profile';
import FacebookLogin from './src/components/facebook_sign_in';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      });
  }

  render() {
    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return null;
    }
    const { statusBar } = styles;
    return (
      <View>
        <StatusBarComponent style={statusBar}/>
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
