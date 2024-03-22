import { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { UserCard } from './UserCard';
import { UserSimple } from '../../Models/Users/UserSimple';
import { COLOR } from '../../Styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { saveUsers } from '../../Store/Users/usersSlice';
import { ApplicationState } from '../../Store/applicationState';

export function UsersList() {
	const users = useSelector((state: ApplicationState) => state.users.users);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				const users = data.map(
					(user: any) =>
						({
							id: user.id,
							name: user.name,
							username: user.username,
							isSubscribed: false,
						} as UserSimple)
				);

				dispatch(saveUsers(users));
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<ActivityIndicator color={COLOR.mainAccent} />
			) : (
				<FlatList
					data={users}
					renderItem={({ item }) => <UserCard user={item} />}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.listContent}
					style={styles.list}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: '100%',
	},
	listContent: {
		gap: 15,
	},
	list: {
		width: '100%',
	},
});
