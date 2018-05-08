import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../../App';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.props.navigator.dismissModal();
      }
      if (event.id == 'save') {
        this.handleSubmit();
      }
    }
  }

  handleSubmit() {

  }

  update(field) {
    console.log(field);
  }

  render() {
    const { containerStyle } = styles;

    return (
      <View style={{flex:1, backgroundColor:'#FFD6C0'}}>
        <ScrollView style={containerStyle}>
          <View>
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={() => this.update("name")}/>
          </View>
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
};

export default connect()(Preferences);
