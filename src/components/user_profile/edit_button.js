import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

export class EditButton extends React.Component {
  edit() {
    const leftButtons = [
      {
        title: 'Back', // for a textual button, provide the button title (label)
        id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        buttonColor: '#ED4009', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 16, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ];
    const rightButtons = [
      {
        title: 'Save', // for a textual button, provide the button title (label)
        id: 'save', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        buttonColor: '#ED4009', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 16, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ];
    Navigation.showModal({
      screen: 'pcnk.Preferences', // unique ID registered with Navigation.registerScreen
      title: 'Edit Preferences', // title of the screen as appears in the nav bar (optional)
      navigatorButtons: {leftButtons, rightButtons},
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }

  render() {
    const {
      buttonStyle,
      textStyle,
    } = styles;
    return (
      <TouchableOpacity style={buttonStyle} onPress={()=>this.edit()}>
        <Text style={textStyle}>Edit Preferences</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    backgroundColor:'#ED4009',
    borderRadius: 5,
    marginLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    alignSelf: 'center',
  },
};

export default connect()(EditButton);
