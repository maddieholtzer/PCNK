import React from 'react';
import { Platform } from 'react-native';
import { Navigation, Screen } from 'react-native-navigation';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { registerScreens, registerScreenVisibilityListener } from '../screens';

export const store = configureStore();
registerScreens(store, Provider);
registerScreenVisibilityListener();

class App extends React.component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
  }

  onStoreUpdate() {
      let {root} = store.getState().root;

      // handle a root change
      // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
      if (this.currentRoot != root) {
        this.currentRoot = root;
        this.startApp(root);
      }
    }

  startApp(root) {
    switch(root) {
      case 'after-login': {
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
            screen: 'pcnk.SignInOptions',
            title: 'SignInOptions',
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
