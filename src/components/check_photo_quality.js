import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import CustomButton from './icon_button';
import {Navigation} from 'react-native-navigation';

const CheckPhotoQuality = (props) => {
    const { textStyle, containerStyle, imageStyle, imageContainer, textContainer,
      otherContainer, buttonStyle, iconStyle } = styles;
    console.log("hi");
    console.log(props.img);
  return (
    <View style={containerStyle}>
        <View style={imageContainer}>
          <Image source={{uri: props.img}} style={imageStyle}/>
        </View>
          <Text style={textStyle}>Happy with your shot?</Text>
          <View style={otherContainer}>
            <CustomButton style={buttonStyle}
                          imgSource={require('../../assets/X-mark.png')}
                          textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
                          onPress={() => {
                            Navigation.dismissModal();
                          }}>
              No
            </CustomButton >
            <CustomButton style={buttonStyle}
                          imgSource={require('../../assets/check.png')}
                          textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
                          onPress={() => {
                            Navigation.dismissModal();
                          }}
                          >
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
    flex: .5,
    alignSelf: 'center',

  },
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    marginTop: 0,
  },

  imageContainer: {
    flex: 4,
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
    flex: 1.5,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
  },

  buttonStyle: {
    flex: 3,
    width: Dimensions.get('window').width/2,
    resizeMode: 'cover',

  },

  iconStyle: {
    height: 64,
    width: 64,
  },
};

export default CheckPhotoQuality;
