import React from 'react';
import { View, Text, Image } from 'react-native';

const CheckPhotoQuality = (props) => {
    const { textStyle, containerStyle, imageStyle } = styles;
    console.log("hi");
    console.log(props.img);
  return (
    <View style={containerStyle}>
      <View>
      <Text style={textStyle}>Looks Good?</Text>
      <Image source={{uri: props.img}} style={imageStyle}/>
      </View>
      <View>

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
    
  },
  containerStyle: {
    justifyContent: 'center',
  },

  imageStyle: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
};

export default CheckPhotoQuality;
