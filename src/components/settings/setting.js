import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';

export default class Setting extends React.Component {
  const backButtonImg = require('../../../assets/iOS_back_button.png');
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <LogoutButton />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: "#F8f8f9",
    flex: 1,
  },
}
