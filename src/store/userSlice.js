import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { USER_API } from '../constants/constants'

export const login = createAsyncThunk(
    'user/login',
    async function(obj) {
       const response = await axios.post(`${USER_API}/login/`, {
            email: obj.email,
            password: obj.password
       })
       
       return response.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userLogin: null,
        userToken: null
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.userLogin = action.payload.username
        }
    }
})

export default userSlice.reducer