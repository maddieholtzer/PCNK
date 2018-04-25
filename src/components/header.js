import React from 'react';
import { View, Text } from 'react-native';
import CardSection from './card_section';
import HeaderButton from './header_button';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const iOSBack = require('../../assets/iOS_back_button.png');
    const { title, headerTextStyle, containerStyle } = this.props;
    return (
      <View style={containerStyle}>
        <HeaderButton imgSource={iOSBack} linkText="Back" />
        <Text style={headerTextStyle}>{title}</Text>
        <HeaderButton linkText="Send Code" />
      </View>
    );
  }
}

export default Header;
