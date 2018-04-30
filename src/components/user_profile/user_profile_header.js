import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { store } from '../../../App';
import { connect } from 'react-redux';
import EditButton from './edit_button';

export class UserProfileHeader extends React.Component {
  render() {
    const {
      avatarStyle,
      smallTextStyle,
      avatarWrapperStyle,
      bigTextStyle,
      headerContainerStyle,
      rightWrapperStyle,
      columnContainerStyle,
      wrapperStyle
    } = styles;
    const currentUser = store.getState().auth.currentUser;
    const imgUrl = currentUser.additionalUserInfo.profile.picture.data.url;
    // TODO: replace groups and items with user info from state
    const groups = 2;
    const items = 5;
    const level = Math.floor((groups*10 + items*5)/10);
    return (
      <View style={headerContainerStyle}>
        <View style={avatarWrapperStyle}>
          <Image
            style={avatarStyle}
            source={{uri: `${imgUrl}`}}
          />
          <Text style={smallTextStyle}>{`Level ${level}`}</Text>
        </View>

        <View style={columnContainerStyle}>
          <View style={rightWrapperStyle}>
            <View style={wrapperStyle}>
              <Text style={bigTextStyle}>{groups}</Text>
              <Text style={smallTextStyle}>Groups</Text>
            </View>

            <View style={wrapperStyle}>
              <Text style={bigTextStyle}>{items}</Text>
              <Text style={smallTextStyle}>Items Traded</Text>
            </View>
          </View>

          <View style={rightWrapperStyle}>
            <EditButton />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
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
    alignItems: 'center',
  },
  wrapperStyle: {
    marginTop: 25,
    alignItems: 'center',
    width: 110,
    height: 60
  },
  bigTextStyle: {
    fontSize: 20
  },
  headerContainerStyle: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  rightWrapperStyle: {
    marginLeft: 10,
    flexDirection: 'row'
  },
  columnContainerStyle: {
    flexDirection: 'column'
  }
};

export default connect()(UserProfileHeader);
