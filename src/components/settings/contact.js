import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';

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
    const { containerStyle, headerStyle, contentStyle, linkStyle } = styles;

    return (
      <View style={{flex:1, backgroundColor:'#FFD6C0'}}>
        <ScrollView style={containerStyle}>
          <Text style={headerStyle}>About Us</Text>
          <Text style={contentStyle}>PCNK is built by 4 developers: Alizeh Iqbal, Carolyn Scoville, Mattie Holtzer, Yangchen Shen. </Text>
          <Text style={headerStyle}>Github Repo</Text>
          <Text style={linkStyle} onPress={() => Linking.openURL('https://github.com/mattieholtzer/PCNK')}> github.com/mattieholtzer/PCNK </Text>
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
  },

  linkStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '300',
    color: 'blue',
    marginLeft: 25,
    marginRight: 25
  }
};

export default Help;
