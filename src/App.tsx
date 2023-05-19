/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';


//---importlarım-----
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Primary" component={Primary} />
        <Tab.Screen name="Secondary" component={Secondary} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default Router;

