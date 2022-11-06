import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COLLECTIONS_API } from "../constants/constants";
import { setTracks } from "./trackSlice";

export const getCollections = createAsyncThunk(
    'collections/getCollections',
    async () => {
        try {
            const response = await axios.get(COLLECTIONS_API)

            return response
        } catch (error){
            return error.response.data
        }
    }
)

export const getCollectionById = createAsyncThunk(
    'collections/getCollectionById',
    async (id, { dispatch }) => {
        try {
            const response = await axios.get(`${COLLECTIONS_API}/${id}/`)
            dispatch(setTracks(response.data.items))

            return response.data
        } catch(error) {
            return error.response.data
        }
    } 
)

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collectionsList: [],
        currentCollection: null
    },
    extraReducers: {
        [getCollections.fulfilled]: (state, action) => {
            state.collectionsList = action.payload.data.map(el => el.id)
        },
        [getCollectionById.fulfilled]: (state, action) => {
            state.currentCollection = action.payload.id
        } 
    }
})

export default collectionsSlice.reducer