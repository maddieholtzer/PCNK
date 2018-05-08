import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {RNCamera}  from 'react-native-camera';
import {Navigation} from 'react-native-navigation';

class OurCamera extends React.Component {
  render() {
    const { containerStyle, preview, capture } = styles;
  return (
  <View style={containerStyle}>
  <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
              style={preview}
              flashMode={RNCamera.Constants.FlashMode.off}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          </View>
  </View>
  )}
  takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        Navigation.showModal({
          screen: 'pcnk.CheckPhotoQuality',
          title: 'Check Photo Quality',
          passProps: {img: data.uri},
        });
        console.log(data.uri);
      }
    };
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 0.3,
    marginBottom: 0.3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
    backgroundColor: "#ffffff",
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
};
export default OurCamera;
