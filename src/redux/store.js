import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './post';

export default configureStore({
	reducer: {
		posts: postsSlice,
	},
});
