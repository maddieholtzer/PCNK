import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from './button';
import CardSection from './card_section';
import AltButton from './alt_button';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

class SignInOptions extends React.Component {
  constructor() {
    super();
  }

  async facebookLogin () {
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
      console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const logoIcon = require('../../assets/pcnk_icon_only_white.png');
    const facebookIcon = require('../../assets/facebook_icon.png');
    const userIcon = require('../../assets/add_user_icon.png');
    const { layoutStyle, imageStyle, halfLayoutStyle, redButtonStyle,
    blueButtonStyle, redBorderStyle, whiteTextStyle, redTextStyle,
    blueButtonWhiteTextStyle, altButtonStyle } = styles;
    return (
      <View style={layoutStyle}>
          <CardSection>
              <View style={halfLayoutStyle}>
                <Image source={require('../../assets/logo_transparent_background.png')}
                  style={imageStyle}/>
              </View>
          </CardSection>
          <CardSection>
            <View style={halfLayoutStyle}>
              <View style={altButtonStyle}>
                <AltButton
                  buttonStyle={blueButtonStyle}
                  textStyle={blueButtonWhiteTextStyle}
                  imgSource={facebookIcon}
                  onPress={this.facebookLogin}>
                  Sign In with Facebook
                </AltButton>
              </View>

            </View>
          </CardSection>
      </View>
    );
  }
}

const styles = {
  redButtonStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#ed4008",
    borderColor: "#ed4008",
    alignItems: 'center',
    flexDirection: 'row',
  },

  whiteTextStyle: {
    alignSelf: 'center',
    marginLeft: 45,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  blueButtonWhiteTextStyle: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    paddingTop: 15,

  },

  redTextStyle: {
    justifyContent: 'center',
    color: '#ed4008',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 15,
    paddingLeft: 60,
  },

  altButtonStyle: {
  },

  blueButtonStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "#425FB4",
    borderColor: '#425FB4',
    marginBottom: 50,
    paddingRight: 15,

  },

  redBorderStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    borderColor: "#ed4008"
  },

  layoutStyle: {
    justifyContent: 'space-between',
    marginTop: 20,
  },

  imageStyle: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 20,
  },

  halfLayoutStyle: {
    justifyContent: 'space-between',
  },
};

export default SignInOptions;
