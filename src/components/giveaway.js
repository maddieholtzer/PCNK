import React from 'react';
import { View, Text } from 'react-native';

export default class Giveaway extends React.Component {
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>

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
  }
};
