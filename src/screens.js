import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import Pantry from './components/pantry';
import UserProfile from './components/user_profile/user_profile';
import Help from './components/help';
import Map from './components/map';
import SignInOptions from './components/sign_in_options';

export function registerScreens(store, Provider){
  Navigation.registerComponent('pcnk.Pantry', () => Pantry, store, Provider);
  Navigation.registerComponent('pcnk.UserProfile', () => UserProfile, store, Provider);
  Navigation.registerComponent('pcnk.Help', () => Help, store, Provider);
  Navigation.registerComponent('pcnk.Map', () => Map, store, Provider);
}

export function registerScreenVisibilityListener(){
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
