import React from 'react';
import { View, Image } from 'react-native';

const Splash = () => {
  const { containerStyle, imageStyle } = styles;
  return (
    <View style={containerStyle}>
      <Image source={require('../../assets/white_logo_color_background.jpg')} />
    </View>
  );
};

const styles = {
  containerStyle: {
  width: 100,
  height: 100
  },

  imageStyle: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
};

export default Splash;
