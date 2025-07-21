import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Movie } from '../types/Movie';

interface MovieCardProps {
  movie: Movie;
  onPress: () => void;
  isFavorite?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress, isFavorite }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: movie.poster }} style={styles.poster} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.meta}>⭐ {movie.rating}  |  {movie.releaseYear}</Text>
      {isFavorite && <Text style={styles.favorite}>♥</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    alignItems: 'center',
    padding: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: '#888',
  },
  favorite: {
    color: 'red',
    fontSize: 18,
    marginTop: 8,
  },
});

export default MovieCard; 