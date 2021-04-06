import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/Home';
import Info from '../page/Info';
import Create from '../page/Create';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Create"
        component={Create}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
