import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import CustomButton from './button';

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
          <Text style={textStyle}>Happy with your shot?</Text>
          <View style={otherContainer}>
            <CustomButton imgSource={require('../../assets/thumbs/thumb-down.png')} >
              No
            </CustomButton >
            <CustomButton imgSource={require('../../assets/thumbs/thumb-up.png')} >
              Yes
            </CustomButton >
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
    flex: 2,
    flexDirection: 'row',
  },
};

export default CheckPhotoQuality;
