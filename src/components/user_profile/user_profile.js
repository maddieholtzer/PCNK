import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { store } from '../../../App';
import { connect } from 'react-redux';
import UserProfileHeader from './user_profile_header';

export class UserProfile extends React.Component {
  render() {
    const {
      viewStyle,
    } = styles;
    const currentUser = store.getState().auth.currentUser;

    return (
      <View style={viewStyle}>
        <UserProfileHeader />
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
};

export default connect()(UserProfile);
