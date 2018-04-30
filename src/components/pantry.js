import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Pantry extends React.Component {
  render() {
    const { viewStyle, backgroundStyle } = styles;
    return (
      <View style={viewStyle}>
        <Image source={require('../../assets/pantry-background.jpeg')}
          style={backgroundStyle}/>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    marginTop: 0.3,
    marginBottom: 0.3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
    backgroundColor: "#ffffff",
  },
  backgroundStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    // resizeMode: "contain",
  },
};
