import React from 'react';
import { View, Image, Text } from 'react-native';
import CustomButton from './button';
import { Icon } from 'react-native-elements';
import CardSection from './card_section.js';

class SignInOptions extends React.Component {
  constructor() {
    super();
  }

  render() {
    const logoIcon = require('../../assets/pcnk_icon_only_white.png');
    const { layoutStyle, imageStyle, halfLayoutStyle, redButtonStyle,
    blueButtonStyle, redBorderStyle, whiteTextStyle, redTextStyle } = styles;
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
              <CustomButton buttonStyle={redButtonStyle} imgSource={logoIcon}
                            textStyle={whiteTextStyle}>
                Sign In With PCNK
              </CustomButton>
              <CustomButton buttonStyle={blueButtonStyle} textStyle={whiteTextStyle}> Sign In with Facebook</CustomButton>
              <Text style={{fontSize: 18, alignSelf: 'center', marginBottom: 20, color: '#333'}}>Or</Text>
              <CustomButton buttonStyle={redBorderStyle} textStyle={redTextStyle}>
                Create Account
              </CustomButton>
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

  redTextStyle: {
    alignSelf: 'center',
    color: '#ed4008',
    fontSize: 18,
    fontWeight: '600',
  },

  blueButtonStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "blue",
    borderColor: 'blue',
    marginBottom: 50
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
    height: 150,
    width: 150,
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
