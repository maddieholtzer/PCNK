import React from 'react';
import { Platform } from 'react-native';
import { Navigation, Screen } from 'react-native-navigation';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { registerScreens, registerScreenVisibilityListener } from './src/screens';
import * as appActions from "./src/actions/index";

export const store = configureStore();
registerScreens(store, Provider);
registerScreenVisibilityListener();

export class App extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
  }

  onStoreUpdate() {
      const {root} = store.getState().root;

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
          label: 'Camera',
          screen: 'pcnk.Camera',
          icon: require('./assets/nav_icons/plus_red_half_size.png'),
          title: 'Camera',
        }, {
          label: 'Help',
          screen: 'pcnk.Help',
          icon: require('./assets/nav_icons/help_red_half_size.png'),
          title: 'Help',
        }, {
          label: 'Profile',
          screen: 'pcnk.UserProfile',
          icon: require('./assets/nav_icons/user_red_half_size.png'),
          title: `${store.getState().profile.bio.first_name} ${store.getState().profile.bio.last_name}`,
        }];
        Navigation.startTabBasedApp({
          tabs,
          animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          tabsStyle: {
            tabBarBackgroundColor: '#F9F9F9',
            tabBarButtonColor: '#595959',
            tabBarTextColor: '#595959',
            tabBarSelectedButtonColor: '#ED4009',
            tabBarSelectedTextColor: '#ED4009',
            tabFontFamily: 'BioRhyme-Bold',
          },
          appStyle: {
            tabBarBackgroundColor: '#F9F9F9',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#323031',
            navBarTextColor: '#323031',
            tabBarSelectedButtonColor: '#ED4009',
            navigationBarColor: '#F9F9F9',
            navBarBackgroundColor: '#F9F9F9',
            statusBarColor: '#ED4009',
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

      case 'splash': {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'pcnk.Splash',
            title: 'Splash',
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
