import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavorite } from '../redux/favoritesSlice';
import FavoriteButton from '../components/FavoriteButton';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

const { width } = Dimensions.get('window');

// Reduce poster size and font sizes for compact view
const POSTER_WIDTH = width * 0.45;
const POSTER_HEIGHT = width * 0.65;

const MovieDetailsScreen: React.FC<{ route: RouteProp<RootStackParamList, 'Details'> }> = ({ route }) => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{movie.title}</Text>
      </View>
      <View style={styles.posterCard}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
      </View>
      <View style={styles.detailsCard}>
        <Text style={styles.rating}>⭐ {movie.rating}</Text>
        <Text style={styles.genres}>{movie.genres.join(', ')}</Text>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.releaseDate}>Release Date: <Text style={styles.releaseDateValue}>{movie.releaseDate}</Text></Text>
        <FavoriteButton
          isFavorite={isFavorite}
          onPress={() => dispatch(toggleFavorite(movieId))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 0,
  },
  header: {
    width: '100%',
    backgroundColor: '#6a11cb',
    paddingTop: 32,
    paddingBottom: 12,
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginBottom: 8,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.5,
    textAlign: 'center',
    textShadowColor: '#0002',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  posterCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 6,
    marginTop: -24,
    marginBottom: 8,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  poster: {
    width: POSTER_WIDTH,
    height: POSTER_HEIGHT,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    marginHorizontal: 8,
    marginBottom: 12,
    width: width * 0.95,
    alignItems: 'center',
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  rating: {
    fontSize: 15,
    color: '#6a11cb',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  genres: {
    fontSize: 12,
    color: '#2575fc',
    marginBottom: 6,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 11,
    color: '#888',
    marginBottom: 8,
  },
  releaseDateValue: {
    color: '#6a11cb',
    fontWeight: 'bold',
  },
});

export default MovieDetailsScreen; 