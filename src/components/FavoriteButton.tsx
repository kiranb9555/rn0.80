import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={[styles.text, isFavorite && styles.favText]}>
      {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  favText: {
    color: '#FFD700',
  },
});

export default FavoriteButton; 