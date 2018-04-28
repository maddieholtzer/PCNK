import React from 'react';
import {Platform, SafeAreaView, View } from 'react-native';
import { Navigation, Screen } from 'react-native-navigation';
import firebase from 'react-native-firebase';
import init from './store/init';

class App {
  appRoot = 'loading';
  store = {};

  constructor() {
    init()
      .then(this.attachToStore)
      .then(this.startApp)
      .catch(err => console.log('App init error', err.message))
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
