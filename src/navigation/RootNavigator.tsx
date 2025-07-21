import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { RootStackParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={BottomTabNavigator} />
    <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
