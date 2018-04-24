import React from 'react';
import { View, Image } from 'react-native';
import Button from './button';

class SignInOptions extends React.Component {
  constructor() {
    super();
  }

  render() {
    const logoIcon = '../../assets/pcnk_icon_only_white.png';
    return (
      <View>
      <Button buttonColor="#ff0700">
        <Image source={require(logoIcon)}/>
        Sign In With PCNK
      </Button>
      </View>
    );
  }
}

export default SignInOptions;
