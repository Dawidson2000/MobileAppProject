import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { UserCard } from './UserCard';
import { UserSimple } from '../../Models/UserSimple';

export function UsersList() {
	const [users, setUsers] = useState<UserSimple[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<Text>Loading...</Text>
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
		padding: 20,
		width: '100%',
	},
	listContent: {
		gap: 15,
	},
	list: {
		width: '100%',
	},
});