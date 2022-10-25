import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../constants/constants'

export const login = createAsyncThunk(
    'user/login',
    async function(obj, { rejectWithValue }) {
        try {
            const responseData = await Promise.all([
                axios.post(`${USER_API}/login/`, {
                    email: obj.email,
                    password: obj.password
                }),
                axios.post(`${USER_API}/token/`, {
                    email: obj.email,
                    password: obj.password
                })
            ])
           
           return responseData
        }
        catch (error){
            return rejectWithValue(error.response)
        }
    }
)

export const signup = createAsyncThunk(
    'user/signup',
    async function(obj, { rejectWithValue }) {
        try {
            const response = await axios.post(`${USER_API}/signup/`, {
                username: obj.userLogin,
                email: obj.email,
                password: obj.password
            })
            
            return response.data
        } catch (error) {
            return rejectWithValue(error.response)
        }   
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userLogin: null,
        userTokenAccess: null,
        userTokenRefresh: null,
        status: null,
        message: null,
        auth: false,
        isUser: false
    },
    reducers: {
        getUsername(state) {
            const username = localStorage.getItem('username')
            if(username) {
                state.isUser = true
                return
            }
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.auth = true
            state.userLogin = action.payload[0].data.username
            state.userTokenAccess = action.payload[1].data.access
            state.userTokenRefresh = action.payload[1].data.refresh
        },
        [login.rejected]: (state, action) => {
            state.status = 'error',
            state.message = action.payload.data.non_field_errors[0]
        },
        [signup.fulfilled]: (state, action) => {
            localStorage.setItem('username', action.payload.username)
            state.isUser = true
        },
        [signup.rejected]: (state,action) => {
            state.status = 'error'
            if(action.payload.status > 399) {
                const key = Object.keys(action.payload.data)
                state.message = action.payload.data[key]
            }
        }
    }
})

export const { getUsername } = userSlice.actions
export default userSlice.reducer