import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Details tab content coming soon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailsScreen; 