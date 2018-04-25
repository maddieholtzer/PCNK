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
    const { title, headerTextStyle, containerStyle, linkTextLeft,
      linkTextRight, imgSource } = this.props;
    return (
      <View style={containerStyle}>
        <HeaderButton imgSource={imgSource} linkTextLeft={linkTextLeft} />
        <Text style={headerTextStyle}>{title}</Text>
        <HeaderButton linkTextRight={linkTextRight} />
      </View>
    );
  }
}

export default Header;
