import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/Home';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
