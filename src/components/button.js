import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Button = ({ onPress, children, imgSource, buttonColor }) => {
  const { buttonStyle, backgroundColor, textStyle, iconStyle } = styles;

  return (
    <TouchableOpacity
      style={buttonStyle}
      style={{ backgroundColor: buttonColor}}
      backgroundColor={backgroundColor}
      onPress={onPress} >
      <Image source={imgSource} style={iconStyle} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 100,
    flexDirection: 'row'

  },
  backgroundColor: {
    backgroundColor: '#ed4008'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 2
  },
  iconStyle: {
    height: 30,
    width: 30,
    paddingBottom: 10,
    flex: 1
  }
};

export default Button;
