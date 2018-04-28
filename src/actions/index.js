import * as types from './actiontypes';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

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
    dispatch(changeAppRoot('login'));
  };
}

export function login() {
    return async function(dispatch, getState) {
      try {
        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
          // <App />;
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
        dispatch(changeAppRoot('after-login'));
      } catch (e) {
        console.error(e);
      }
    };
  }
