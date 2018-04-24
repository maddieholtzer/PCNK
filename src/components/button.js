import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Button = ({ onPress, children }) => {
  const { buttonStyle, backgroundColor, textStyle } = styles;
  
  return (
    <TouchableOpacity
      style={buttonStyle}
      backgroundColor={backgroundColor}
      onPress={onPress} >
      <Image source={children} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff0700',
    marginLeft: 5,
    marginRight: 5
  },
  backgroundColor: {
    backgroundColor: '#ff0700'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
