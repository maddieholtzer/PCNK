import React from 'react';
import { View } from 'react-native';
import StatusBarComponent from './src/components/status_bar'; // always present
import SignInOptions from './src/components/sign_in_options';
import Pantry from './src/components/pantry';
import Header from './src/components/header';
import Picker from './src/components/picker';
import firebase from 'react-native-firebase';

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
    const { headerTextStyle, containerStyle } = styles;

    // If the user has not authenticated
    if (!this.state.isAuthenticated) {
      return (
        <View>
          <StatusBarComponent />
          <SignInOptions /> // needs to swap places with SignInOptions for production
        </View>
      );
    }
    return (
      <View>
        <StatusBarComponent/>
        <Header title="Sign In" headerTextStyle={headerTextStyle}
          containerStyle={containerStyle}/>
        <Picker />
      </View>
    );
  }
}

const styles = {
  statusBar: {
    barStyle: "light-content"
  },

  headerTextStyle: {
    color: '#ed4008',
    fontSize: 22,
    fontWeight: '600',
  },

  containerStyle: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

};

export default App;
