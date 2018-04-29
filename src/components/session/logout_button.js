import React from 'react';
import { View, Image, Text } from 'react-native';
import AltButton from '../alt_button';
import * as  appActions from '../../actions/index';
import { connect } from 'react-redux';
import { store } from '../../../App';

export class Logout extends React.Component {

  render() {
    const { layoutStyle, imageStyle, halfLayoutStyle, redButtonStyle,
    blueButtonStyle, redBorderStyle, whiteTextStyle, redTextStyle,
    blueButtonWhiteTextStyle, altButtonStyle } = styles;
    return (
      <View style={layoutStyle}>
        <AltButton
          buttonStyle={blueButtonStyle}
          textStyle={blueButtonWhiteTextStyle}
          onPress={ () => this.onLogoutPress() }>
          Sign Out
        </AltButton>
      </View>
    );
  }

  /*
  onLogoutPress:
    Changes the root value of the app to 'login'
  */
  onLogoutPress() {
    this.props.dispatch(appActions.logout());
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
  },

  whiteTextStyle: {
    alignSelf: 'center',
    marginLeft: 45,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  blueButtonWhiteTextStyle: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    paddingTop: 15,

  },

  redTextStyle: {
    justifyContent: 'center',
    color: '#ed4008',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 15,
    paddingLeft: 60,
  },

  blueButtonStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: "#425FB4",
    borderColor: '#425FB4',
    marginBottom: 50,
    paddingRight: 15,

  },

  redBorderStyle: {
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    borderColor: "#ed4008"
  },

  layoutStyle: {
    justifyContent: 'space-between',
    marginTop: 20,
  },

  imageStyle: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 20,
  },

  halfLayoutStyle: {
    justifyContent: 'space-between',
  },
};

export default connect()(Logout);
