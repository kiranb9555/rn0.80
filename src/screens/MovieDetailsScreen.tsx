import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavorite } from '../redux/favoritesSlice';
import FavoriteButton from '../components/FavoriteButton';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

type MovieDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({ route }) => {
  const { movieId } = route.params;
  const movie = useSelector((state: RootState) =>
    state.movies.all.find(m => m.id === movieId)
  );
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.ids.includes(movieId)
  );
  const dispatch = useDispatch();

  if (!movie) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.meta}>⭐ {movie.rating}  |  {movie.releaseYear}</Text>
      <Text style={styles.genres}>{movie.genres.join(', ')}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.releaseDate}</Text>
      <FavoriteButton
        isFavorite={isFavorite}
        onPress={() => dispatch(toggleFavorite(movieId))}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  meta: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  genres: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
});

export default MovieDetailsScreen; 