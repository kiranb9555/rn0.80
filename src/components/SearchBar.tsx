import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { filterByTitle } from '../redux/moviesSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (text: string) => {
    dispatch(filterByTitle(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        onChangeText={handleChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 0,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default SearchBar; 