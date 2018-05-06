import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'close') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <LogoutButton />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: "#F8f8f9",
    flex: 1,
  },
}

Settings.navigatorStyle = {
	statusBarColor: '#ED4009',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ED4009',
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};

export default connect()(Settings);
