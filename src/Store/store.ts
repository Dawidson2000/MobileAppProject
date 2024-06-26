import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Users/usersSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

export default store;
