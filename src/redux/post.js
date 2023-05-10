import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		setPosts: (state, action) => {
			return action.payload;
		},
		updatePost: (state, action) => {
			const { id, title, content } = action.payload;
			const index = state.findIndex((post) => post.id === id);
			state[index] = { ...state[index], title, content };
		},
	},
});

export const { setPosts, updatePost } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
	try {
		const response = await axios.get('http://localhost:3001/v1/api/posts');
		dispatch(setPosts(response.data));
	} catch (error) {
		console.log(error);
	}
};

export const patchPost = (id, title, content) => async (dispatch) => {
	try {
		const response = await axios.patch(
			`http://localhost:3001/v1/api/posts/${id}`,
			{
				title,
				content,
			}
		);
		dispatch(updatePost(response.data));
	} catch (error) {
		console.log(error);
	}
};

export default postsSlice.reducer;
