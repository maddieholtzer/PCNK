import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const IconButton = ({ onPress, children, imgSource, buttonStyle, textStyle}) => {
  const { iconStyle } = styles;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress} >
      <Image source={imgSource} style={iconStyle} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  iconStyle: {
    height: 64,
    width: 64,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  }
};

export default IconButton;
