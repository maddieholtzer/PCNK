import React from 'react';
import { View, Text, Image, Dimensions, Slider, TextInput } from 'react-native';
import CustomButton from './icon_button';
import {Navigation} from 'react-native-navigation';

class FinalPhotoDeets extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: 0,
      img: props.img,
      sliderval: "ASAP"
    }
    this.setSliderval = this.setSliderval.bind(this);
  }

  setSliderval(val){
    let sliderval2 = '';
    if (val===0){
      sliderval2 = 'ASAP';
    } else if (val===1){
      sliderval2 = 'Today';
    } else if (val===2){
      sliderval2 = 'Tomorrow';
    } else if (val===3){
      sliderval2 = 'This Week';
    } else if (val===4){
      sliderval2 = 'In it for the long haul';
    }
    this.setState({sliderval: sliderval2});
  }

  render() {
    const { textStyle, containerStyle, imageStyle, imageContainer, textContainer,
      otherContainer, buttonStyle, iconStyle } = styles;
    return (
      <View style={containerStyle}>
      <View style={imageContainer}>
      <Image source={{uri: this.state.img}} style={imageStyle}/>
      <TextInput placeholder='Where did you put it/Very brief description' multiline='true'
      style={{flex: 1.5, height: 80, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#F0F0F0', width: 150, marginTop: 30, borderRadius: 3, marginRight: 20}}
      onChangeText={() => {txt => this.setState({text: txt})}}
      value={this.state.text}
      />
      </View>
      <Text style={textStyle}>How long is it good for?</Text>
      <Slider
      step={1}
      maximumValue={4}
      style={{ width: Dimensions.get('window').width/1.2, position: 'relative', marginTop: 0 }}
      onValueChange={val => {
        this.setSliderval(val);
        this.setState({ value: val });
      }}
      value={this.state.value}
      />
      <Text> {this.state.sliderval} </Text>
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
    flex: .2,
    alignSelf: 'center',

  },
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1.3,
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
