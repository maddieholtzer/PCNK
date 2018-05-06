import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
