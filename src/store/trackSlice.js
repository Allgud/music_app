import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TRACKS_API } from "../constants/constants";
import axios from "axios";

export const getAllTracks = createAsyncThunk(
    'tracks/getAllTracks',
    async function () {
        const response = await axios.get(TRACKS_API)

        return response.data
    }
)

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        status: null,
        searchValue: '',
    },
    reducers: {
        changeSearchValue(state, action) {
            state.searchValue = action.payload.searchValue
        },
    },
    extraReducers: {
        [getAllTracks.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllTracks.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.tracks = action.payload
        }
    }
})

export const { changeSearchValue } = trackSlice.actions
export default trackSlice.reducer