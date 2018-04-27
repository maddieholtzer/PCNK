import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignInOptions from './src/components/sign_in_options';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={SignInOptions}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
