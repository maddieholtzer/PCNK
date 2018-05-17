import React from 'react';
import CardSection from '../card_section';
import { View, Image } from 'react-native';

const FoodIndexItem = ({foodItem}) => {

  return (

      <View>
        <Image source={{uri: foodItem.imgURL}} style={styles.thumbnailStyle}/>
      </View>

  );
};

const styles = {
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
};

export default FoodIndexItem;
