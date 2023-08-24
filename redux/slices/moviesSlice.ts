import { Movie } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface moviesState {
  movies: Movie[];
}

const initialState: moviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
