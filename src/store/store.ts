import { configureStore } from '@reduxjs/toolkit'
import meSlice from './slice/me.slice'
const store = configureStore({
	reducer: {
		me: meSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
