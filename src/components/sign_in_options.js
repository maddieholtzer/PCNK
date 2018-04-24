import React from 'react';
import { View, Image } from 'react-native';
import Button from './button';

class SignInOptions extends React.Component {
  constructor() {
    super();
  }

  render() {
    const logoIcon = require('../../assets/pcnk_icon_only_white.png');
    const { layoutStyle } = styles;
    return (
      <View style={layoutStyle}>
      <Button buttonColor="#ed4008" imgSource={logoIcon}>
        Sign In With PCNK
      </Button>
      </View>
    );
  }
}

const styles = {
  layoutStyle: {
    
  }
};

export default SignInOptions;
