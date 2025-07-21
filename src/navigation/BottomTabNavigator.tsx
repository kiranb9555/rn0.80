import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen'; // create a placeholder if not exists
import ProfileScreen from '../screens/ProfileScreen'; // create a placeholder if not exists
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#181818', borderTopColor: '#232323' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Favorites') iconName = 'heart';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator; 