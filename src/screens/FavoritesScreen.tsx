import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Favorites coming soon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen; 