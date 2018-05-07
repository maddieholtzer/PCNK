import React from 'react';
import { View, Text, ScrollView } from 'react-native';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    const { containerStyle, headerStyle, contentStyle } = styles;

    return (
      <View style={{flex:1, backgroundColor:'#FFD6C0'}}>
        <ScrollView style={containerStyle}>
          <Text style={headerStyle}>What is PCNK</Text>
          <Text style={contentStyle}>PCNK is a mobile app for you to give away or take food within a personal network.</Text>
          <Text style={headerStyle}>How do I start?</Text>
          <Text style={contentStyle}>Create a group, or join an existing group. Then you can post food items to give away, or take food from the "pantry".</Text>
          <Text style={headerStyle}>Thank you!</Text>
          <Text style={contentStyle}>Together we can reduce food waste.</Text>
        </ScrollView>
      </View>
    );
  }
}

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