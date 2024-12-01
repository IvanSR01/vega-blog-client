import { Post } from '@/shared/interfaces/post.interface'
import { createSlice } from '@reduxjs/toolkit'

interface UpdatePostState {
	post: null | Post
}

const initialState: UpdatePostState = {
	post: null
}

const updatePostSlice = createSlice({
	name: 'updatePost',
	initialState,
	reducers: {
		setPost: (state, action) => ({ ...state, post: action.payload })
	}
})

export const { setPost } = updatePostSlice.actions

export default updatePostSlice.reducer
