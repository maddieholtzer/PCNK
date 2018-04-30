import * as types from './actiontypes';
import { userLoggedIn, userLoggedOut } from './auth';
import { startLoading, endLoading } from './loading';
import { updateBio } from './profile';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import { store } from '../../App';
/*
Action Creators
*/

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root: root
  };
}

/*
dispatch the actionCreators
*/

export function appInitialized() {
  return async function(dispatch, getState) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('splash'));
  };
}

export function login() {
    return async function(dispatch, getState) {
      dispatch(startLoading());
      try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
          // <App />;
          dispatch(endLoading());
          return;
          // throw new Error('User cancelled request'); // Handle this however fits the flow of your app
        }

        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

        // get the access token
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
          throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }

        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        console.log(currentUser);
        console.info(JSON.stringify(currentUser.user.toJSON()));
        if (currentUser) {
          dispatch(userLoggedIn(currentUser)); // add current user to state
          dispatch(updateBio(currentUser.additionalUserInfo.profile));
          dispatch(changeAppRoot('after-login'));
        }
      } catch (e) {
        console.error(e);
      }
      dispatch(endLoading());
    };
  }

export function logout() {
    return async function(dispatch, getState) {
      try {
        dispatch(userLoggedOut());
        dispatch(changeAppRoot('splash'));
      } catch (e) {
        console.error(e);
      }
    };
  }
