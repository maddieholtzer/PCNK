import React from 'react';
import { View, SafeAreaView } from 'react-native';
import StatusBarComponent from './src/components/status_bar'; // always present
import SignInOptions from './src/components/sign_in_options';
import Pantry from './src/components/pantry';
import SignInForm from './src/components/sign_in';
import CreateAccount from './src/components/create_account';
import Splash from './src/components/splash';
import firebase from 'react-native-firebase';
import UserProfile from './src/components/user_profile/user_profile';
import FacebookLogin from './src/components/facebook_sign_in';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


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

      return (
      //   <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
      //     <View>
      //       <StatusBarComponent />
      //       <SignInOptions /> // needs to swap places with SignInOptions for production
      //     </View>
      // </SafeAreaView>
        <Provider store={store}>
          <StatusBarComponent />
          <Router />
        </Provider>
      );

  }
}

const styles = {
  statusBar: {
    barStyle: "dark-content"
  },

};

export default App;
