import React from 'react';
import { View, Text, Image } from 'react-native';
import firebase from 'react-native-firebase';
import { store } from '../../../App';

export default class Giveaway extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [],
                   currentUser: store.getState().auth.currentUser.user._user };


  }

  componentWillMount() {
    const { currentUser, items } = this.state;
    const databaseRef = firebase.database().ref("foods");
    databaseRef.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        if (currentUser.email === childSnapshot.val().user) {
          items.push(childSnapshot.val());
        }
      });
    });
    console.log(items);
  }

  renderPhotos() {

  }

  render() {
    const { viewStyle, photoRowStyle } = styles;
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
  },
  photoRowStyle: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
  }
};
