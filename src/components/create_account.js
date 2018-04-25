import React from 'react';
import { View } from 'react-native';
import Header from './header';
import Field from './field';
import Button from './button';

class CreateAccount extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { containerStyle, headerTextStyle, redButtonStyle,
    whiteTextStyle } = styles;
    return (
      <View>
      <Header title="Create Account" headerTextStyle={headerTextStyle}
      containerStyle={containerStyle}/>
      <Field label="First Name" placeholder="First Name" />
      <Field label="Last Name" placeholder="Last Name" />
      <Field label="Phone Number" placeholder="Phone Number" />
      <Field label="Password" placeholder="Password" />
      <Field label="Confirm Password" placeholder="Confirm Password" />

      <Button buttonStyle={redButtonStyle} textStyle={whiteTextStyle}>
        Create Account
      </Button>
      </View>
    );
  }
}

const styles = {
  redButtonStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#ed4008",
    borderColor: "#ed4008",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  whiteTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 40,
  },

  headerTextStyle: {
    color: '#333333',
    fontSize: 22,
    fontWeight: '600',
  },

  containerStyle: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
};

export default CreateAccount;
