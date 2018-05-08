import React from 'react';
import { View, Text, Image, Dimensions, Slider, TextInput, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import CustomButton from './emoji_button';
import {Navigation} from 'react-native-navigation';
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class FinalPhotoDeets extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: 0,
      img: props.img,
      sliderval: "ASAP",
      category: "Please select one"
    };
    this.setSliderval = this.setSliderval.bind(this);
    this.createFoodItem = this.createFoodItem.bind(this);
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  getSelectedImages() {
    const metadata = {
    contentType: 'image/jpeg'
};
    firebase.storage().ref().putFile(`${this.props.img}`, metadata)
    .then(uploadedFile => {console.log(uploadedFile);}).catch(error => {console.error(error);});

    // let blobbedImage = RNFetchBlob.wrap(this.props.img);
    // Blob.build(blobbedImage, {type: 'image/jpg'}).then(blob => {
    //   foodImagesREf.put(blob, { contentType: 'image/jpg'}).then(function(snapshot) {
    //     console.log("Uploaded a blob or file!");
    //   });
    //   blob.close();
    // });
  }

  // getSelectedImages(uri, mime = 'image/jpg') {
  //
  //     return new Promise((resolve, reject) => {
  //       const uploadUri = this.props.img;
  //       let uploadBlob = null;
  //       console.log(`uploadUri is: ${this.props.img}`);
  //       console.log(`uploadUri.name is: ${uploadUri.name}`);
  //
  //       const imageRef = firebase.storage().ref('foodImages/' + file.name);
  //
  //
  //       fs.readFile(uploadUri, 'base64')
  //         .then((data) => {
  //           return Blob.build(data, { type: `${mime};BASE64` });
  //         })
  //         .then((blob) => {
  //           uploadBlob = blob;
  //           return imageRef.put(blob, { contentType: mime });
  //         })
  //         .then(() => {
  //           uploadBlob.close();
  //           return imageRef.getDownloadURL();
  //         })
  //         .then((url) => {
  //           resolve(url);
  //         })
  //         .catch((error) => {
  //           reject(error);
  //       });
  //     });
  //   }



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
      sliderval2 = 'Anytime';
    }
    this.setState({sliderval: sliderval2});
  }

  createFoodItem() {
    const ref = firebase.database().ref("foods");
    const {img} = this.props;
    ref.push({imgURL: img, text: this.state.text, value: this.state.value,
      sliderval: this.state.sliderval, category: this.state.category})
      .then(function () {
        return ref.once("value");
      }).then(function (snapshot) {
        console.log(snapshot.val());
      });
  }

  render() {
    const { textStyle, containerStyle, imageStyle, imageContainer, textContainer,
      otherContainer, buttonStyle, iconStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={containerStyle}>
          <View style={imageContainer}>
            <Image source={{uri: this.state.img}} style={imageStyle}/>
            <TextInput placeholder='  Where did you put it/Very brief description' multiline={true}
              style={{flex: 1.5, height: 85, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#F0F0F0', width: 150, marginTop: 45, borderRadius: 3, marginRight: 20}}
              onChangeText={(txt) => this.setState({text: txt})}
              value={this.state.text}
              />
          </View>

          <Text style={textStyle}>Pick up by: {this.state.sliderval}</Text>
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

          <Text style={textStyle}>Category: {this.state.category}</Text>
          <View style={{flex: .5, flexDirection: 'row', justifyContent: 'space-around'}}>
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/red-apple_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'fruit'});
              }}>
              Fruit
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/carrot_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'veggies'});
              }}>
              Veggies
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/fork-and-knife-with-plate_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'meal'});
              }}>
              Meal
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/pretzel_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'snack'});
              }}>
              Snack
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/croissant_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'baked good'});
              }}>
              Baked Good
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/emojis/soft-ice-cream_emoji.png')}
              textStyle={{fontSize: 9, alignSelf: 'center', marginTop: 0}}
              onPress={() => {
                this.setState({category: 'dessert'});
              }}>
              Dessert
            </CustomButton >
          </View>


          <View style={otherContainer}>
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/X-mark.png')}
              textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
              onPress={() => {
                Navigation.dismissAllModals();
              }}>
              Nah
            </CustomButton >
            <CustomButton style={buttonStyle}
              imgSource={require('../../assets/check.png')}
              textStyle={{fontSize: 20, alignSelf: 'center', marginTop: 10}}
              id='post-photo'
              onPress={() => {
                this.createFoodItem();
                this.getSelectedImages();
                Navigation.dismissAllModals();
              }}
              >
              Post
            </CustomButton >
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    flex: .5,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
  },

  buttonStyle: {
    flex: 2,
    width: Dimensions.get('window').width/2,
    resizeMode: 'cover',

  },

  iconStyle: {
    height: 64,
    width: 64,
  },
};

export default FinalPhotoDeets;
