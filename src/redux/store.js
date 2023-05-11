import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
	reducer: {
		posts: postReducer,
	},
	middleware: [thunkMiddleware],
});

export default store;
