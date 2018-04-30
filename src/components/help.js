import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Help = () => {
  const { containerStyle, headerStyle, contentStyle } = styles;
  return (
    <View style={{flex:1, backgroundColor:'#FFD6C0'}}>
      <ScrollView style={containerStyle}>
        <Text style={headerStyle}>How It Works</Text>
        <Text style={contentStyle}>Blah Blah Blah we have a cool app here is how to use it</Text>
        <Text style={headerStyle}>About Us</Text>
        <Text style={contentStyle}>Blah Blah Blah we have a cool app here is why we made it</Text>
        <Text style={headerStyle}>Contact The Team</Text>
        <Text style={contentStyle}>Blah Blah Blah we have a cool app we are cool pls hire us</Text>
      </ScrollView>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    marginTop: 0.3,
    marginBottom: 0.3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
    backgroundColor: "#ffffff",
  },

  headerStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  contentStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '300',
    color: '#333',
    marginLeft: 25,
    marginRight: 25
  }
};

export default Help;
