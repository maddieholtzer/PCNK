import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';

const Field = ({imgSource, label, placeholderText}) => {
  const { containerStyle, textStyle, fieldTextStyle, iconStyle } = styles;
  return (
    <View style={containerStyle}>
      <Image source={imgSource} style={iconStyle}/>
      <Text style={textStyle}>{label}</Text>
      <TextInput placeholder={placeholderText} placeholderTextColor="#ccc"
                 style={fieldTextStyle}/>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },

  iconStyle: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
  },

  textStyle: {
    fontWeight: '700',
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,

  },

  fieldTextStyle: {
    color: '#ccc',
    fontSize: 18,
    marginRight: 70,
  },

};

export default Field;
