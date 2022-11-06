import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTracks } from "./trackSlice";
import axios from 'axios'
import { TRACKS_API, USER_API } from "../constants/constants";

export const getCurrentTrack = createAsyncThunk(
    'bar/getCurrentTrack',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`${TRACKS_API}/${id}/`)
            dispatch(showBarPlayer())

            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const getNextTrack = createAsyncThunk(
    'bar/getNextTrack',
    async (id, { getState, dispatch }) => {
        const state = getState()
        const index = state.tracks.tracks.findIndex(el => el.id === id)
        const nextId = state.tracks.tracks[index + 1].id
        if(nextId) {
            dispatch(getCurrentTrack(nextId))
        }
        return
    }
)

export const getPrevTrack = createAsyncThunk(
    'bar/getPrevTrack',
    async (id, { getState, dispatch }) => {
        const state = getState()
        const index = state.tracks.tracks.findIndex(el => el.id === id)
        const prevId = state.tracks.tracks[index - 1].id
        if(prevId) {
            dispatch(getCurrentTrack(prevId))
        }
        return
    }
)

export const likeTrack = createAsyncThunk(
    'tracks/likeTrack',
    async (id, { getState, dispatch }) => {
        const state = getState()
        try {
            const response = await axios.post(`${TRACKS_API}/${id.toString()}/favorite/`, {}, {
                headers: {
                    Authorization: `Bearer ${state.user.accessToken}`
                },
            })
            dispatch(getAllTracks(id))
            return {response}

        } catch (error) {
            axios.interceptors.response.use((config) => {
                return config
            }, async (error) => {
                const originalRequest = error.config
                if(error.response.status === 401) {
                    try {
                        const response = await axios.post(`${USER_API}/token/refresh/`, {
                            refresh: localStorage.getItem('token')
                        })
                        state.user.accessToken = response.data.accessToken
                        localStorage.setItem('token', response.data.refresh)
                        return axios.request(originalRequest)
                    } catch (error) {
                        console.log(error.response);
                    }   
                }
            })
        }
    }
)

export const dislikeTrack = createAsyncThunk(
    'tracks/dislikeTrack',
    async (id, { getState, dispatch, rejectWithValue }) => {
        const state = getState()
        try {
            const response = await axios.delete(`${TRACKS_API}/${id.toString()}/favorite`, {
                headers: {
                    Authorization: `Bearer ${state.user.accessToken}`
                }
            })
            dispatch(getAllTracks(id))
            return response

        } catch (error) {
            rejectWithValue(error.response)
        }
    }
)

const barSlice = createSlice({
    name: 'bar',
    initialState: {
        isVisible: false,
        currentTrack: null,
        isPlaying: false,
        status: null,
        onRepeat: false,
        volume: 50,
        seekTime: 0
    },
    reducers: {
        showBarPlayer(state) {
            state.isVisible = true
        },
        togglePlayPause(state) {
            state.isPlaying = !state.isPlaying
        },
        toggleRepeat(state) {
            state.onRepeat = !state.onRepeat
        },
        handleVolume(state, action) {
            state.volume = action.payload.target.value
        },
        setSeekTime(state, action) {
            state.seekTime = action.payload
        },
    },
    extraReducers: {
        [getCurrentTrack.pending]: (state) => {
            state.status = 'loading'
        },
        [getCurrentTrack.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.currentTrack = action.payload
        },
        [getCurrentTrack.rejected]: (_, action) => {
            console.log(action.payload);
        },
        [likeTrack.rejected]: (_,action) => {
            console.log(action.payload);
        }  
    }
})

export const { 
    showBarPlayer, 
    togglePlayPause, 
    toggleRepeat,
    handleVolume,
    setSeekTime
} = barSlice.actions
export default barSlice.reducer