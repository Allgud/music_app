import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './trackSlice'
import userReducer from './userSlice'
import barReducer from './barSlice'
import collectionsReducer from './collectionsSlice'

export default configureStore({
    reducer: {
        tracks: tracksReducer,
        user: userReducer,
        bar: barReducer,
        collections: collectionsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})