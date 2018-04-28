import React from 'react';
import { Text, View } from 'react-native'; //desctructure import
import firebase from 'react-native-firebase';
import { store } from '../../../App';

const UserProfileHeader = () => {
  const { textStyle, viewStyle } = styles;
  if (!firebase.User){
    const firstname = store.getState().auth.currentUser.additionalUserInfo.profile.first_name;
    const lastname = store.getState().auth.currentUser.additionalUserInfo.profile.last_name;
    const name = firstname + " " + lastname;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{name}</Text>;
      </View>
    );
  }

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>`${firebase.User.email}`</Text>;
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default UserProfileHeader;
