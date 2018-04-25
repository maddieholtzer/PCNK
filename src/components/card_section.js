import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
  }
};

export default CardSection;
