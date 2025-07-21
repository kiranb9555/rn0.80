import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleFavorite } from '../redux/favoritesSlice';
import FavoriteButton from '../components/FavoriteButton';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const POSTER_HEIGHT = width * 1.2;

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
      <View style={styles.posterWrapper}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <TouchableOpacity style={styles.playButton} activeOpacity={0.7}>
          <Ionicons name="play-circle" size={64} color="#fff" style={{ opacity: 0.85 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteIcon} onPress={() => dispatch(toggleFavorite(movieId))}>
          <Ionicons name={isFavorite ? 'bookmark' : 'bookmark-outline'} size={28} color={isFavorite ? '#FFD700' : '#fff'} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.badgesRow}>
          <View style={styles.badgeImdb}><Text style={styles.badgeImdbText}>IMDB {movie.rating}</Text></View>
          <View style={styles.badgeStar}><Ionicons name="star" size={16} color="#FFD700" /><Text style={styles.badgeStarText}>4.8 (118k)</Text></View>
        </View>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.genresRow}>
          {movie.genres.map(genre => (
            <View key={genre} style={styles.genrePill}><Text style={styles.genreText}>{genre}</Text></View>
          ))}
        </View>
        <Text style={styles.description} numberOfLines={4}>{movie.description}</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Get Reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
  },
  posterWrapper: {
    width: width,
    height: POSTER_HEIGHT,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#232323',
  },
  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -32,
    marginTop: -32,
    zIndex: 2,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 24,
    right: 24,
    backgroundColor: '#232323cc',
    borderRadius: 18,
    padding: 6,
    zIndex: 2,
  },
  infoCard: {
    width: width * 0.92,
    backgroundColor: '#232323',
    borderRadius: 20,
    marginTop: -40,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  badgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeImdb: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
  },
  badgeImdbText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 13,
  },
  badgeStar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeStarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 4,
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
    marginBottom: 16,
    marginTop: 4,
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
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MovieDetailsScreen; 