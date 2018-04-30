import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { store } from '../../../App';
import { connect } from 'react-redux';

export class EditButton extends React.Component {

  // go to edit food preferences form
  edit() {

  }

  render() {
    const {
      buttonStyle,
      textStyle,
    } = styles;
    return (
      <TouchableOpacity style={buttonStyle} onPress={()=>this.edit}>
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
