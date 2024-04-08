import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        tvSeries: null,
        horrorMovies: null,
        actionMovies: null,
        thrillerMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTvSeries: (state, action) => {
            state.tvSeries = action.payload
        },
        addHorrorMovies: (state, action) => {
            state.horrorMovies = action.payload
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload
        },
        addThrillerMovies: (state, action) => {
            state.thrillerMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTvSeries, addHorrorMovies, addActionMovies,addThrillerMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
