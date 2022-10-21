import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TRACKS_API } from "../constants/constants";
import axios from "axios";

export const getAllTracks = createAsyncThunk(
    'tracks/getAllTracks',
    async function() {
        const resultData = await Promise.all([
            axios.get(TRACKS_API),
            axios.get(`${TRACKS_API}?page=2`),
            axios.get(`${TRACKS_API}?page=3`)
        ])

        return resultData
    } 
)

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        tracks: [],
        status: null,
        searchValue: ''
    },
    reducers: {
        changeSearchValue(state, action) {
            state.searchValue = action.payload.searchValue
        }
    },
    extraReducers: {
        [getAllTracks.pending]: (state) => {
            state.status = 'loading'
        },
        [getAllTracks.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.tracks = action.payload
            .map(el => ([...el.data.results]))
            .reduce((acc, el) => {
                acc.push(...el)            
                return acc
            }, [])
        }
    }
})

export const { changeSearchValue } = trackSlice.actions
export default trackSlice.reducer