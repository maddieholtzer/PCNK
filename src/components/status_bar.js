import React from 'react';
import { View, StatusBar, Text } from 'react-native';

const StatusBarComponent = ({style}) => {
  return (
    <View>
      <StatusBar style={style}/>
    </View>
  );
};

export default StatusBarComponent;
