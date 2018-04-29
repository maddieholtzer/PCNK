import React from 'react';
import { View, Text } from 'react-native';
import { store } from '../../../App';

export default class UserProfile extends React.Component {
  render() {
    const { viewStyle } = styles;
    console.log(store.getState());
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