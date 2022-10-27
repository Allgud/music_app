import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TRACKS_API } from "../constants/constants";
import axios from "axios";

export const getAllTracks = createAsyncThunk(
    'tracks/getAllTracks',
    async function () {
        const response = await axios.get(`${TRACKS_API}/track/all/`)

        return response.data
    }
)

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        allTracks: [],
        status: null,
        searchValue: '',
        filters: {
            author: [],
            genre: []
        },
    },
    reducers: {
        changeSearchValue() {},
        sortByFilter(state, action) {
            const { pickedFilters, activeFilter } = action.payload
            if(activeFilter === 'year') {
                if(pickedFilters.join('') === 'Более новые') {
                    state.tracks = state.tracks.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
                    return
                }

                if(pickedFilters.join('') === 'Более старые') {
                    state.tracks = state.tracks.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
                    return
                }
            }

            pickedFilters.forEach(el => {
                state.tracks = state.tracks.filter(track => track[activeFilter] === el)
            })  
        },
        resetFilters(state) {
            state.tracks = state.allTracks
        }
    },
    extraReducers: {
        [getAllTracks.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllTracks.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.allTracks = action.payload
            state.tracks = action.payload
            state.filters.genre = Array.from(new Set(action.payload.map(el => el.genre)))
            state.filters.author = Array.from(new Set(action.payload.map(el => el.author)))
        }
    }
})

export const { changeSearchValue, sortByFilter, resetFilters } = trackSlice.actions
export default trackSlice.reducer