import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const AltButton = ({ onPress, children, imgSource, buttonStyle, textStyle }) => {
  const { iconStyle, displayStyle } = styles;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress} >
      <View style={displayStyle}>
        <View>
          <Image source={imgSource} style={iconStyle} />
        </View>
        <View>
          <Text style={textStyle}>{children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  iconStyle: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
    marginTop: 15,
  },

  displayStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export default AltButton;
