import React from 'react';
import CardSection from '../card_section';
import { View, Image } from 'react-native';

const FoodIndexItem = ({item}) => {

  return (
    <CardSection>
      <View>
        <Image source={{uri: item.imgURL}} style={styles.thumbnailStyle}/>
      </View>
    </CardSection>
  );
};

const styles = {
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
};

export default FoodIndexItem;
