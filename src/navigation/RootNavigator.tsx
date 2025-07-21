import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { RootStackParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Movies' }} />
    <Stack.Screen name="Details" component={MovieDetailsScreen} options={{ title: 'Movie Details' }} />
  </Stack.Navigator>
);

export default RootNavigator;
