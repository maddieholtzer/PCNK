import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

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
    const { viewStyle, listStyle } = styles;
    return (
      <View style={viewStyle}>
        <View style={listStyle}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                containerStyle={
                  { paddingTop: 15,
                    paddingBottom: 15,
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderColor: '#A3A1A2',
                  }
                }
                titleStyle={{ fontSize: 16, color: 'black' }}
              />
            ))
          }
        </View>
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
  listStyle: {
    backgroundColor: "white",
  },
}

const list = [
  {
    title: 'How to use PCNK',
    icon: 'assistant'
  },
  {
    title: 'Contact Us',
    icon: 'chat'
  },
]

Settings.navigatorStyle = {
	statusBarColor: '#ED4009',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#ED4009',
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};

export default connect()(Settings);
