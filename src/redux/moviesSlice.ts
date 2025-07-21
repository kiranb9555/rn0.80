import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moviesData from '../data/movies';
import { Movie } from '../types/Movie';

interface MoviesState {
  all: Movie[];
  filtered: Movie[];
}

const initialState: MoviesState = {
  all: moviesData as Movie[],
  filtered: moviesData as Movie[],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filterByTitle(state, action: PayloadAction<string>) {
      const query = action.payload.toLowerCase();
      state.filtered = state.all.filter(movie =>
        movie.title.toLowerCase().includes(query)
      );
    },
    resetFilter(state) {
      state.filtered = state.all;
    },
  },
});

export const { filterByTitle, resetFilter } = moviesSlice.actions;
export default moviesSlice.reducer; 