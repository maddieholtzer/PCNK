import React from 'react';
import { View, Text, Image } from 'react-native';
import { store } from '../../../App';
import { connect } from 'react-redux';

export class UserProfile extends React.Component {
  render() {
    const {
      viewStyle,
      avatarStyle,
      smallTextStyle,
      avatarWrapperStyle,
      bigTextStyle,
      headerContainerStyle
    } = styles;
    const currentUser = store.getState().auth.currentUser;
    const imgUrl = currentUser.additionalUserInfo.profile.picture.data.url;
    // TODO: replace groups and items with user info from state
    const groups = 2;
    const items = 5;
    const level = Math.floor((groups*10 + items*5)/10);
    return (
      <View style={viewStyle}>
        <View style={headerContainerStyle}>
          <View style={avatarWrapperStyle}>
            <Image
              style={avatarStyle}
              source={{uri: `${imgUrl}`}}
            />
            <Text style={smallTextStyle}>{`Level ${level}`}</Text>
          </View>

          <View style={avatarWrapperStyle}>
            <Text style={bigTextStyle}>{groups}</Text>
            <Text style={smallTextStyle}>Groups</Text>
          </View>

          <View style={avatarWrapperStyle}>
            <Text style={bigTextStyle}>{items}</Text>
            <Text style={smallTextStyle}>Items Traded</Text>
          </View>
        </View>

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
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  smallTextStyle: {
    fontSize: 16,
  },
  avatarWrapperStyle: {
    width: 100,
    height: 130,
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  bigTextStyle: {
    fontSize: 20
  },
  headerContainerStyle: {
    flexDirection: 'row'
  }
};

export default connect()(UserProfile);
