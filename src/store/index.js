import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './trackSlice'

export default configureStore({
    reducer: {
        tracks: tracksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})