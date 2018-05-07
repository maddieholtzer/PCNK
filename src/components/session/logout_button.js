import React from 'react';
import { View, Image, Text } from 'react-native';
import AltButton from '../alt_button';
import * as  appActions from '../../actions/index';
import { connect } from 'react-redux';
import { store } from '../../../App';

export class LogoutButton extends React.Component {

  render() {
    const { layoutStyle, grayButtonStyle, textStyle } = styles;
    const pcnkIcon = require('../../../assets/orange_icon.png');
    return (
      <View style={layoutStyle}>
        <AltButton
          buttonStyle={grayButtonStyle}
          textStyle={textStyle}
          imgSource={pcnkIcon}
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
  textStyle: {
    justifyContent: 'center',
    fontSize: 16,
    color: '#000000',
    paddingTop: 15,
  },

  grayButtonStyle: {
    backgroundColor: "#ffffff",
    paddingRight: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
  },

  layoutStyle: {
    marginTop: 45,
    justifyContent: 'space-between',
  },
};

export default connect()(LogoutButton);
