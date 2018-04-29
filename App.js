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

export const tabs = [{
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
  label: 'Profile',
  screen: 'pcnk.UserProfile',
  icon: require('./assets/nav_icons/user_red_half_size.png'),
  title: 'Profile',
}];

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
        Navigation.startTabBasedApp({
          tabs,
          animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          tabsStyle: {
            tabBarBackgroundColor: '#F8F8F8',
            tabBarButtonColor: '#19191B',
            tabBarTextColor: '#19191B',
            tabBarSelectedButtonColor: '#ED4009',
            tabFontFamily: 'BioRhyme-Bold',
          },
          appStyle: {
            tabBarBackgroundColor: '#F8F8F8',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#19191B',
            navBarTextColor: '#19191B',
            tabBarSelectedButtonColor: '#ED4009',
            navigationBarColor: '#F8F8F8',
            navBarBackgroundColor: '#F8F8F8',
            statusBarColor: '#ED4009',
            tabFontFamily: 'BioRhyme-Bold',
            topBarElevationShadowEnabled: true, 
            topBarShadowColor: '#19191B',
            topBarShadowOpacity: 0.2,
            topBarShadowOffset: 2,
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
