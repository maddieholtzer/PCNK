import React from 'react';
import { View } from 'react-native';
import LogoutButton from '../session/logout_button';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

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

  showDetail(name) {
    const leftButtons = [
      {
        title: 'Back', // for a textual button, provide the button title (label)
        id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        buttonColor: '#ED4009', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 16, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ];
    if (name=='assistant') {
      Navigation.showModal({
        screen: 'pcnk.Help', // unique ID registered with Navigation.registerScreen
        title: 'How to Use PCNK', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {leftButtons},
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
    }
    if (name=='chat') {
      Navigation.showModal({
        screen: 'pcnk.Contact', // unique ID registered with Navigation.registerScreen
        title: 'Contact Us', // title of the screen as appears in the nav bar (optional)
        navigatorButtons: {leftButtons},
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
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
                onPress={ () => this.showDetail(item.icon)} />
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
