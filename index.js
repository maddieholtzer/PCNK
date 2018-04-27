import { Navigation } from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './src/screens';

registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: 'Pantry',
  screen: 'pcnk.Pantry',
  icon: require('./assets/nav_icons/pcnk_icon_only_red.png'),
  title: 'Pantry',
}, {
  label: 'Map',
  screen: 'pcnk.Map',
  icon: require('./assets/nav_icons/map_red.png'),
  title: 'Map',
}, {
  label: 'Help',
  screen: 'pcnk.Help',
  icon: require('./assets/nav_icons/help_red.png'),
  title: 'Help',
}, {
  label: 'UserProfile',
  screen: 'pcnk.UserProfile',
  icon: require('./assets/nav_icons/user_red.png'),
  title: 'UserProfile',
}];

Navigation.startTabBasedApp({
  tabs
})
