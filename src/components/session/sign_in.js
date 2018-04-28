import React from 'react';
import { View } from 'react-native';
import Header from './header';
import Picker from './picker';
import Field from './field';

const SignInForm = () => {
  const { headerTextStyle, containerStyle } = styles;
  const leftHeaderButtonText = "Back";
  const rightHeaderButtonText = 'Send Code';
  const phoneImage = require('../../assets/phone.png');
  const iOSBack = require('../../assets/iOS_back_button.png');

  return (
    <View>
    <Header title="Sign In" headerTextStyle={headerTextStyle}
    containerStyle={containerStyle} imgSource={iOSBack}
    linkTextLeft={leftHeaderButtonText} linkTextRight={rightHeaderButtonText} />
    <Picker />
    <Field imgSource={phoneImage} label="Phone" placeholderText="000-000-0000"/>
    </View>
  );
};

const styles = {
  headerTextStyle: {
    color: '#333333',
    fontSize: 22,
    fontWeight: '600',
  },

  containerStyle: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
};

export default SignInForm;
