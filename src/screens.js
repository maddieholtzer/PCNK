import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import Pantry from './components/pantry';
import UserProfile from './components/user_profile/user_profile';
import Preferences from './components/user_profile/preferences';
import Help from './components/settings/help';
import Contact from './components/settings/contact';
import Group from './components/group/group';
import Camera from './components/camera'
import Giveaway from './components/giveaway'
import CheckPhotoQuality from './components/check_photo_quality';
import Splash from './components/splash';
import SignInOptions from './components/session/sign_in_options';
import FinalPhotoDeets from './components/final_photo_deets';
import Settings from './components/settings/settings';

export function registerScreens(store, Provider){
  Navigation.registerComponent('pcnk.Splash', () => Splash, store, Provider);
  Navigation.registerComponent('pcnk.SignInOptions', () => SignInOptions, store, Provider);
  Navigation.registerComponent('pcnk.Pantry', () => Pantry, store, Provider);
  Navigation.registerComponent('pcnk.UserProfile', () => UserProfile, store, Provider);
  Navigation.registerComponent('pcnk.Preferences', () => Preferences, store, Provider);
  Navigation.registerComponent('pcnk.Help', () => Help, store, Provider);
  Navigation.registerComponent('pcnk.Contact', () => Contact, store, Provider);
  Navigation.registerComponent('pcnk.Group', () => Group, store, Provider);
  Navigation.registerComponent('pcnk.Camera', () => Camera, store, Provider);
  Navigation.registerComponent('pcnk.Giveaway', () => Giveaway, store, Provider);
  Navigation.registerComponent('pcnk.CheckPhotoQuality', () => CheckPhotoQuality, store, Provider);
  Navigation.registerComponent('pcnk.FinalPhotoDeets', () => FinalPhotoDeets, store, Provider);
  Navigation.registerComponent('pcnk.Settings', () => Settings, store, Provider);
}

export function registerScreenVisibilityListener(){
  new ScreenVisibilityListener({
    // willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    // didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    // willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    // didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
