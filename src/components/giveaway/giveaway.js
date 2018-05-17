import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { store } from '../../../App';
import FoodIndexItem from './food_index_item';

export default class Giveaway extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foodItems: [],
                   currentUser: store.getState().auth.currentUser.user._user };

    this.renderPhotos = this.renderPhotos.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    const { currentUser, foodItems } = this.state;
    const databaseRef = firebase.database().ref("foods");
    databaseRef.once("value", (snapshot) => {
      const previousFoodItems = foodItems;
      snapshot.forEach(childSnapshot => {
        if (currentUser.email === childSnapshot.val().user) {
          previousFoodItems.push(childSnapshot.val());
        }
      });
      this.setState({ foodItems: previousFoodItems });
    });
  }

  componentWillUnmount() {
    const { currentUser, foodItems } = this.state;
    const databaseRef = firebase.database().ref("foods");
    databaseRef.once("value", (snapshot) => {
      const previousFoodItems = foodItems;
      snapshot.forEach(childSnapshot => {
        if (currentUser.email === childSnapshot.val().user) {
          previousFoodItems.push(childSnapshot.val());
        }
      });
      this.setState({ foodItems: previousFoodItems });
    });
  }

  renderPhotos() {
    console.log(this.state.foodItems.length);
    return this.state.foodItems.map( foodItem => <FoodIndexItem
                                                 key={foodItem.imgURL}
                                                 foodItem={foodItem} />);
  }

  render() {
    const { viewStyle, photoRowStyle } = styles;
    return (
      <ScrollView style={viewStyle}>
        <View style={photoRowStyle}>
          {this.renderPhotos()}
        </View>
      </ScrollView>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 22,
    alignItems: 'stretch',
  }
};
