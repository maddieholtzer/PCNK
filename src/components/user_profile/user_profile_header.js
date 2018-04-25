import React from 'react';
import { Text, View } from 'react-native'; //desctructure import
import firebase from 'react-native-firebase';

const UserProfileHeader = () => {
  const { textStyle, viewStyle } = styles;
  if (!firebase.User){
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>HelloI'm a filler</Text>;
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
