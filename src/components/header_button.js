import React from 'react';
import { View, Image, Text} from 'react-native';

const HeaderButton = ({onPress, linkText, imgSource}) => {
  const { linkStyleContainer, linkStyle } = styles;
  return (
    <View style={linkStyleContainer}>
      <Image source={imgSource} />
      <Text style={linkStyle}>{linkText}</Text>
    </View>
  );
};

const styles = {
  linkStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  linkStyle: {
    color: '#ED4008',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 10,

  },

  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  }
};

export default HeaderButton;
