import React from 'react';
import { View } from 'react-native';
import StatusBarComponent from './src/components/status_bar';
import firebase from 'react-native-firebase';

const App = () => {
  const { statusBar } = styles;
  return (
    <View>
      <StatusBarComponent style={statusBar}/>
    </View>
  );
};

const styles = {
  statusBar: {
    barStyle: "light-content"
  }
};

export default App;
