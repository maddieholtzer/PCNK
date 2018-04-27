import React from 'react';
import { View, Text, Image } from 'react-native';

const Pantry = () => {
  const { backgroundStyle } = styles;
  // var images = [],
  //   imgWidth = 7,
  //   winWidth =Dimensions.get('window').width;
  //
  //   for(var i=0;i<Math.ceil(winWidth / imgWidth);i++){
  //       images.push((
  //          <Image source={{uri: 'http://xxx.png'}} style={} />
  //       ))
  //   }
  return (
    <View style={{flex: 1}}>
      <Image source={require('../../assets/pantry-background.jpeg')}
        style={backgroundStyle}/>
    </View>
  );
};

const styles = {
  backgroundStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    // resizeMode: "contain",
  },
};

export default Pantry;
