import { createSelector } from '@reduxjs/toolkit';
import { ApplicationState } from '../applicationState';

const selectUsers = (state: ApplicationState) => state.users.users;
const selectUserId = (state: ApplicationState, userId: number) => userId;

export const selectUserById = createSelector(
	[selectUsers, selectUserId],
	(users, userId) => {
		return users.find((user) => user.id === userId);
	}
);

export const selectSubscribedUsers = createSelector([selectUsers], (users) =>
	users.filter((user) => user.isSubscribed)
);
