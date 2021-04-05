import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Routes from './src/routes/index';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}
