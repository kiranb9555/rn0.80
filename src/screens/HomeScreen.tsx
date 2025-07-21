import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navigation';

const HomeScreen: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.filtered);
  const favorites = useSelector((state: RootState) => state.favorites.ids);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <SearchBar />
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
            isFavorite={favorites.includes(item.id)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
};

export default HomeScreen; 