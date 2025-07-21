import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavorite } from '../redux/favoritesSlice';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';
import MIIcon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const POSTER_HEIGHT = width * 1.2;

const MovieDetailsScreen: React.FC<{ route: RouteProp<RootStackParamList, 'MovieDetailsScreen'> }> = ({ route }) => {
  const { movieId } = route.params;
  const movie = useSelector((state: RootState) =>
    state.movies.all.find(m => m.id === movieId)
  );
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.ids.includes(movieId)
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  if (!movie) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MIIcon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <View style={styles.infoCard}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.genresRow}>
          {movie.genres.map(genre => (
            <View key={genre} style={styles.genrePill}><Text style={styles.genreText}>{genre}</Text></View>
          ))}
        </View>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.releaseDate}>Release Date: <Text style={styles.releaseDateValue}>{movie.releaseDate}</Text></Text>
        <TouchableOpacity
          style={[styles.button, isFavorite && styles.buttonActive]}
          activeOpacity={0.85}
          onPress={() => dispatch(toggleFavorite(movieId))}
        >
          <Text style={[styles.buttonText, isFavorite && styles.buttonTextActive]}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 16,
    zIndex: 3,
    backgroundColor: '#111',
    borderRadius: 18,
    padding: 10,
  },
  poster: {
    width: width,
    height: POSTER_HEIGHT,
    resizeMode: 'cover',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: -32,
  },
  infoCard: {
    width: width * 0.92,
    backgroundColor: '#232323',
    borderRadius: 20,
    marginTop: -8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  genresRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    justifyContent: 'center',
  },
  genrePill: {
    backgroundColor: '#333',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  genreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  description: {
    color: '#ccc',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 4,
  },
  releaseDate: {
    color: '#888',
    fontSize: 13,
    marginBottom: 16,
  },
  releaseDateValue: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 8,
    width: '80%',
  },
  buttonActive: {
    backgroundColor: '#232323',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#FFD700',
  },
});

export default MovieDetailsScreen; 