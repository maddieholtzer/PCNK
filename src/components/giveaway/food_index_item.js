import React from 'react';
import CardSection from '../card_section';
import { View, Image } from 'react-native';

const FoodIndexItem = ({foodItem}) => {

  return (
    <View style={styles.imageContainerStyle}>
      <Image source={{uri: foodItem.imgURL}} style={styles.thumbnailStyle}/>
    </View>
  );
};

const styles = {
  thumbnailStyle: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  imageContainerStyle: {

  },
};

export default FoodIndexItem;
