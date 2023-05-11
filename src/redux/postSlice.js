import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postSlice = createSlice({
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

export const { setPosts, updatePost } = postSlice.actions;

export const fetchPosts =
	({ id }) =>
	async (dispatch) => {
		try {
			const response = await axios.get(`http://localhost:3001/v1/api/posts/${id}`);
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

export default postSlice.reducer;
