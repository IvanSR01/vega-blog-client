import { configureStore } from '@reduxjs/toolkit'
import meSlice from './slice/me.slice'
import updatePostSlice from './slice/update-post.slice'
const store = configureStore({
	reducer: {
		me: meSlice,
		post: updatePostSlice
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
