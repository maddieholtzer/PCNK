import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from './button';
import { Icon } from 'react-native-elements';
import CardSection from './card_section';
import AltButton from './alt_button';

class SignInOptions extends React.Component {
  constructor() {
    super();
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
              <CustomButton buttonStyle={redButtonStyle}
                            imgSource={logoIcon}
                            textStyle={whiteTextStyle}>
                Sign In With PCNK
              </CustomButton>
              <View style={altButtonStyle}>
                <AltButton
                  buttonStyle={blueButtonStyle}
                  textStyle={blueButtonWhiteTextStyle}
                  imgSource={facebookIcon}>
                  Sign In with Facebook
                </AltButton>
              </View>
              <Text style={{fontSize: 18, alignSelf: 'center',
                marginBottom: 20, color: '#333'}}>Or</Text>
              <AltButton buttonStyle={redBorderStyle}
                         textStyle={redTextStyle}
                         imgSource={userIcon}>
                Create Account
              </AltButton>
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
    paddingLeft: 45,

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
