import React from 'react';
import {Platform, SafeAreaView, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './src/screens';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import SignInOptions from './src/components/sign_in_options';
import firebase from 'react-native-firebase';
import FacebookLogin from './src/components/facebook_sign_in';


const store = configureStore();

registerScreens(store, Provider);
registerScreenVisibilityListener();

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
  title: 'Profile',
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
