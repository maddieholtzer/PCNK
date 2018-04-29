import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';

export default class UserProfile extends React.Component {
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