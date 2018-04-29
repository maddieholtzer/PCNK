import React from 'react';
import { View, Text, Image, Dimensions, Slider, TextInput } from 'react-native';
import CustomButton from './icon_button';
import {Navigation} from 'react-native-navigation';

class FinalPhotoDeets extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: 50,
      img: props.img
    }

  }

  render() {
    const { textStyle, containerStyle, imageStyle, imageContainer, textContainer,
      otherContainer, buttonStyle, iconStyle } = styles;
    return (
      <View style={containerStyle}>
      <View style={imageContainer}>
      <Image source={{uri: this.state.img}} style={imageStyle}/>
      <TextInput placeholder='super brief comment on food' multiline='true'
      style={{flex: 1.5, height: 80, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#F0F0F0', width: 150, marginTop: 30, borderRadius: 3, marginRight: 20}}
      onChangeText={() => {this.setState({text: ""})}}
      value={this.state.text}
      />
      </View>
      <Text style={textStyle}>How long is it good for?</Text>
      <Slider
      step={1}
      maximumValue={100}
      style={{ width: 300 }}
      />
      <View style={otherContainer}>
      <CustomButton style={buttonStyle}
      imgSource={require('../../assets/X-mark.png')}
      textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
      onPress={() => {
        Navigation.dismissAllModals();
      }}>
      No
      </CustomButton >
      <CustomButton style={buttonStyle}
      imgSource={require('../../assets/check.png')}
      textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
      onPress={() => {
        Navigation.dismissAllModals();
      }}
      >
      Yes
      </CustomButton >
      </View>
      </View>
    );

  }

}

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
    flex: .7,
    flexDirection: 'row',
    marginTop: 0,
    width: Dimensions.get('window').width,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3'
  },

  imageStyle: {
    // alignSelf: 'stretch',
    flex: .5,
    // height: 300,
    width: Dimensions.get('window').width/4,
    marginTop: 0,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 20,
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

export default FinalPhotoDeets;
