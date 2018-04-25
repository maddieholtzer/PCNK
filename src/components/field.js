import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';

const Field = ({imgSource, label, placeholderText, iconStyle}) => {
  const { containerStyle, textStyle, fieldTextStyle } = styles;
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
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },

  textStyle: {
    fontWeight: '700',
    fontSize: 16,
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,

  },

  fieldTextStyle: {
    color: '#ccc',
    fontSize: 18,
    flex: 2,
  },

};

export default Field;
