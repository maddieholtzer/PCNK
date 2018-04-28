import React from 'react';
import {Platform, SafeAreaView, View } from 'react-native';
import { Navigation, Screen } from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './src/screens';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import firebase from 'react-native-firebase';

class App {
  appRoot = 'loading';
  store = {};

  constructor() {
    this.init()
      .then(this.attachToStore)
      .then(this.startApp)
      .catch(err => console.log('App init error', err.message))
  }

  init() {
    const store = configureStore();
    registerScreens(store, Provider);
    registerScreenVisibilityListener();
  }

  onStoreUpdate = () => {
    const { currentUser } = store.getState().auth;
    const newAppRoot = !!currentUser ? 'app' : 'login';
    if(newAppRoot !== this.appRoot) {
      this.appRoot = newAppRoot;
      this.startApp();
    }
  }

  attachToStore = store => {
    const { currentUser } = store.getState().auth;
    // keep store ref, but it could also be passed to onStoreUpdate somehow?
    this.store = store;
    // this can be complex business logic depending on requirements
    this.appRoot = !!currentUser ? 'app' : 'login';
    store.subscribe(this.onStoreUpdate);
  }

  startApp = () => {
    switch(this.appRoot) {
      case 'app': {
        const tabs = [{
          label: 'Pantry',
          screen: 'pcnk.Pantry',
          icon: require('./assets/nav_icons/pcnk_icon_only_red_half_size.png'),
          title: 'Pantry',
        }, {
          label: 'Map',
          screen: 'pcnk.Map',
          icon: require('./assets/nav_icons/map_red_half_size.png'),
          title: 'Map',
        }, {
          label: 'Help',
          screen: 'pcnk.Help',
          icon: require('./assets/nav_icons/help_red_half_size.png'),
          title: 'Help',
        }, {
          label: 'UserProfile',
          screen: 'pcnk.UserProfile',
          icon: require('./assets/nav_icons/user_red_half_size.png'),
          title: 'UserProfile',
        }];
        Navigation.startTabBasedApp({
          tabs,
          animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          tabsStyle: {
            tabBarBackgroundColor: '#61D2D0',
            tabBarButtonColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            tabFontFamily: 'BioRhyme-Bold',
          },
          appStyle: {
            tabBarBackgroundColor: '#003a66',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            tabBarSelectedButtonColor: '#ed4008',
            navigationBarColor: '#003a66',
            navBarBackgroundColor: '#61D2D0',
            statusBarColor: '#002b4c',
            tabFontFamily: 'BioRhyme-Bold',
          },
          iconStyle: {
            height: 30,
            width: 30,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: 'center',
          }
        })
        break;
      }

      case 'login': {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'pcnk.Login',
            title: 'Login',
            navigatorStyle: {
              navBarHidden: true
            }
          }
        });
        break;
      }

      default: {
        console.error('Aww, snap! App init went wrong :(');
      }
    }
  }
}

export default App;


// Navigation.showModal({
//   screen: 'pcnk.SignIn', // unique ID registered with Navigation.registerScreen
//   title: 'Modal', // title of the screen as appears in the nav bar (optional)
//   passProps: {}, // simple serializable object that will pass as props to the modal (optional)
//   navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
//   navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
//   animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
// });


// import { View, SafeAreaView } from 'react-native';
// import StatusBarComponent from './src/components/status_bar'; // always present
// import Pantry from './src/components/pantry';
// import SignInForm from './src/components/sign_in';
// import CreateAccount from './src/components/create_account';
// import Splash from './src/components/splash';
// import UserProfile from './src/components/user_profile/user_profile';
// import { Navigation } from 'react-native-navigation';
// import {registerScreens, registerScreenVisibilityListener} from './screens';
//
// // screen related book keeping
//
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isAuthenticated: false,
//     };
//   }
//
//   componentDidMount() {
//     firebase.auth().signInAnonymously()
//       .then(() => {
//         this.setState({
//           isAuthenticated: true,
//         });
//       });
//   }
//
//   render() {
//
//     // If the user has not authenticated
//     if (!this.state.isAuthenticated) {
//       return (
//         <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
//           <View>
//             <StatusBarComponent />
//              <Splash /> // needs to swap places with SignInOptions for production
//           </View>
//       </SafeAreaView>
//       );
//     }
//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
//         <View>
//           <StatusBarComponent/>
//           <SignInOptions />
//         </View>
//     </SafeAreaView>
//     );
//   }
// }
//
// const styles = {
//   statusBar: {
//     barStyle: "dark-content"
//   },
//
// };
//
// export default App;
