import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navigation';
import { Movie } from '../types/Movie';
import movies from '../data/movies';

const { width } = Dimensions.get('window');

const HomeScreenMovieCard = ({ movie, onPress }: { movie: Movie; onPress: () => void }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
    <Image source={{ uri: movie.poster }} style={styles.poster} resizeMode="cover" />
    <View style={styles.info}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>⭐ {movie.rating}</Text>
      <Text style={styles.year}>{movie.releaseYear}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.filtered).filter(m => m.title !== 'Inception');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Movies</Text>
      </View>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBarBg}>
          <Text style={styles.searchIcon}>🔍</Text>
          <View style={{ flex: 1 }}>
            <SearchBar />
          </View>
        </View>
      </View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HomeScreenMovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No movies found.</Text>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#6a11cb',
    paddingTop: 48,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 8,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    textShadowColor: '#0002',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  searchBarWrapper: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  searchBarBg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e7ff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 22,
    marginRight: 8,
    color: '#6a11cb',
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    minHeight: 150,
    alignItems: 'center',
    borderLeftWidth: 8,
    borderLeftColor: '#2575fc',
  },
  poster: {
    width: width * 0.28,
    height: width * 0.42,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#ddd',
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    flexWrap: 'wrap',
    color: '#222',
  },
  rating: {
    fontSize: 16,
    color: '#6a11cb',
    marginBottom: 4,
    fontWeight: '600',
  },
  year: {
    fontSize: 14,
    color: '#2575fc',
    fontWeight: '500',
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 18,
    color: '#aaa',
  },
});
