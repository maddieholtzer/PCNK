import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import {store} from '../../App';
import Login from './session/sign_in_options';

export default class Splash extends React.Component {
  render() {
    const resizeMode = 'center';
    const remote = 'https://res.cloudinary.com/devleg/image/upload/v1524984324/white_logo_color_background.jpg';
    
    console.log(store.getState().loading.loading);
    
    if (store.getState().loading.loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#ED4009',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              style={{
                flex: 1,
                resizeMode,
              }}
              source={{ uri: remote }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'flex-end',
              paddingBottom: 50
            }}
          >
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        </View>
      );
    } else {
      return <Login />;
    }
  }
}
