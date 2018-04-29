import React from 'react';
import { View, Text, Image, Dimensions, Button } from 'react-native';

const CheckPhotoQuality = (props) => {
    const { textStyle, containerStyle, imageStyle, imageContainer, textContainer,
      otherContainer } = styles;
    console.log("hi");
    console.log(props.img);
  return (
    <View style={containerStyle}>
        <View style={imageContainer}>
          <Image source={{uri: props.img}} style={imageStyle}/>
        </View>
          <Text style={textStyle}>Looks Good?</Text>
          <View style={otherContainer}>
            <Button title="No" />
            <Button title="Yes" />
          </View>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    flex: 1,
    alignSelf: 'center',

  },
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    marginTop: 0,
  },

  imageContainer: {
    flex: 3,
    marginTop: 0,
  },

  imageStyle: {
    // alignSelf: 'stretch',
    flex: 1,
    // height: 300,
    width: Dimensions.get('window').width,
    marginTop: 0,
    resizeMode: 'cover'
  },

  otherContainer: {
    flex: 1,
    flexDirection: 'row',
  },
};

export default CheckPhotoQuality;
