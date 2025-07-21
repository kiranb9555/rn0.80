import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen'; // create a placeholder if not exists
import Icon from 'react-native-vector-icons/FontAwesome';
// import MIIcon from 'react-native-vector-icons/MaterialIcons'; // Not needed for tabs
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
          if (route.name === 'Home') return <Icon name="home" size={size} color={color} />;
          if (route.name === 'Favorites') return <Icon name="heart" size={size} color={color} />;
          if (route.name === 'Profile') return <Icon name="user" size={size} color={color} />;
          if (route.name === 'Details') return <Icon name="info-circle" size={size} color={color} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator; 