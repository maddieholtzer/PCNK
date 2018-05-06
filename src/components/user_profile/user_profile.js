import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { store } from '../../../App';
import { connect } from 'react-redux';
import UserProfileHeader from './user_profile_header';

export class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id === 'settings') {
				let rightButtons = [];
				if (Platform.OS === 'ios') {
					rightButtons = [
						{
							id: 'close',
							title: 'Close',
							buttonFontSize: 14
						}
					];
				}
				this.props.navigator.showModal({
					screen: 'pcnk.Settings',
					title: 'Settings',
					navigatorButtons: {
						rightButtons
					}
				});
			}
    }
  }

  render() {
    const {
      viewStyle,
    } = styles;
    const currentUser = store.getState().auth.currentUser;

    return (
      <View style={viewStyle}>
        <UserProfileHeader />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    marginTop: 0.3,
    marginBottom: 0.3,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#A3A1A2',
    backgroundColor: "#ffffff",
  },
};

export default connect()(UserProfile);
