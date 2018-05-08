import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../../../App';
import { Select } from 'teaset';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Anything'
    }
    this.items = [
      'Anything',
      'Fruit',
      'Veggies',
      'Meal',
      'Snack',
      'Baked Good',
      'Dessert',
    ];
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
          <Select
            style={{width: 200}}
            value={this.state.value}
            items={this.items}
            placeholder='Select item'
            pickerTitle='Select the your favorite food category'
            pickerType='popover'
            onSelected={(item, index) => this.setState({value: item})}
            />
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
