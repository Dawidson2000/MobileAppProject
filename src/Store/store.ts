import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slices/usersSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

export default store;
