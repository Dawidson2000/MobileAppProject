import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSimple } from '../../Models/Users/UserSimple';

export interface UsersState {
	users: UserSimple[];
}

const inititalState: UsersState = {
	users: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState: inititalState,
	reducers: {
		addUser: (state, action: PayloadAction<number>) => {
			state.users = state.users.map((user) =>
				user.id === action.payload ? { ...user, isAdded: true } : user
			);
		},
		saveUsers: (state, action: PayloadAction<UserSimple[]>) => {
			state.users = action.payload;
		},
	},
});

export const { addUser, saveUsers } = usersSlice.actions;

export default usersSlice.reducer;
