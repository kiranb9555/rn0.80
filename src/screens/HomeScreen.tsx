import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, Text, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navigation';
import { Movie } from '../types/Movie';
import movies from '../data/movies';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const allMovies = useSelector((state: RootState) => state.movies.filtered).filter(m => m.title !== 'Inception');
  const filteredMovies = allMovies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.headerTitle}>Popular Now</Text>
        <TouchableOpacity style={styles.avatarWrapper}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarWrapper}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search movies..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
            activeOpacity={0.85}
          >
            <Image source={{ uri: item.poster }} style={styles.gridPoster} />
            <View style={styles.gridOverlay}>
              <Text style={styles.gridTitle} numberOfLines={2}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.gridList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarWrapper: {
    // width: 36,
    // height: 60,
    // borderRadius: 18,
    // overflow: 'hidden',
    // borderWidth: 2,
    // borderColor: '#232323',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'center',
  },
  searchBarWrapper: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchBar: {
    backgroundColor: '#232323',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  gridList: {
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: 16,
  },
  gridCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: CARD_MARGIN,
    backgroundColor: '#232323',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  gridPoster: {
    width: '95%',
    height: '95%',
    resizeMode: 'contain',
    borderRadius: 16,
  },
  gridOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000a',
    padding: 6,
  },
  gridTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
