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
    const { containerStyle, headerStyle, contentStyle, subheaderStyle } = styles;

    return (
      <View style={{flex:1, backgroundColor:'#FFD6C0'}}>
        <ScrollView style={containerStyle}>
          <Text style={headerStyle}>What is PCNK</Text>
          <Text style={contentStyle}>
            PCNK is a mobile app for you to give away or take food within your
            personal network.
          </Text>
          <Text style={contentStyle}></Text>
          <Text style={contentStyle}>
            Give away food + Get free food
          </Text>
          <Text style={contentStyle}>
            = Reduce food waste + Save money
          </Text>
          <Text style={headerStyle}>How do I start?</Text>
          <Text style={subheaderStyle}>1. Add groups:</Text>
          <Text style={contentStyle}>
             On the bottom navigation bar, click the "Group" tab.
            Create a group, or join an existing group.
          </Text>
          <Text style={subheaderStyle}>2. Post food items: </Text>
          <Text style={contentStyle}>
            On the bottom navigation bar, click the "Camera" tab.
            Then you can post food items to your groups.
          </Text>
          <Text style={subheaderStyle}>3. Review posted food items: </Text>
          <Text style={contentStyle}>
            On the bottom navigation bar, click the "Giveaway" tab.
          </Text>
          <Text style={subheaderStyle}>4. Take food items: </Text>
          <Text style={contentStyle}>
            On the bottom navigation bar, click the "Pantry" tab.
            Then you will see the recommended items for you based on your preferences.
          </Text>
          <Text style={headerStyle}>How to edit my preferences? </Text>
          <Text style={contentStyle}>On the bottom navigation bar, click the "Profile" tab.
          Then click the "Edit Preferences" button to set or change your preferences.</Text>
          <Text style={contentStyle}></Text>
          <Text style={contentStyle}></Text>
          <Text style={contentStyle}></Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
    backgroundColor: "#ffffff",
  },

  headerStyle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  contentStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 25,
    marginRight: 25
  },
  subheaderStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginLeft: 25,
    marginRight: 25
  }
};

export default Help;
