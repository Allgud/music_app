import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { USER_API } from '../constants/constants'
import axios from 'axios'

export const login = createAsyncThunk(
    'user/login',
    async function(obj, { rejectWithValue }) {
        try {
            const response = await Promise.all([
                axios.post(`${USER_API}/login/`, {email: obj.email, password: obj.password}),
                axios.post(`${USER_API}/token/`, {email: obj.email, password: obj.password})
            ])
            
            localStorage.setItem('token', response[1].data.refresh )
            return response
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
                username: obj.username,
                email: obj.email,
                password: obj.password
            })
            

            return response
        } catch (error) {
            return rejectWithValue(error.response)
        }   
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        email: null,
        isAuth: false,
        status: '',
        isUser: false,
        message: null,
        accessToken: null,
    },
    reducers: {
        logout(state) {
            localStorage.removeItem('token')
            state.isAuth = false
            state.username = null
        }, 
        checkIsUser(state) {
            if(localStorage.getItem('music_app')) {
                state.isUser = true
            } 
        },
        alreadyHaveAccount(state) {
            localStorage.setItem('music_app', 'unknown_id')
            state.isUser = true
        } 
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.status = 'resolved'
            const { username, email } = action.payload[0].data
            state.isAuth = true
            state.username = username
            state.email = email
            state.accessToken = action.payload[1].data.access 
        },
        [login.rejected]: (state, action) => {
            state.status = 'error',
            state.message = action.payload.data.non_field_errors[0]
        },
        [signup.fulfilled]: (state, action) => {
            localStorage.setItem('music_app', action.payload.data.id)
            state.isUser = true
        },
        [signup.rejected]: (state, action) => {
            state.status = 'error'
            const keys = Object.keys(action.payload.data)
            state.message = action.payload.data[keys[0]]
        }
    }
})

export const { checkIsUser, logout, alreadyHaveAccount } = userSlice.actions
export default userSlice.reducer