import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UserSimple } from '../../Models/UserSimple';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { User } from '../../Models/User';
import { useRoute } from '@react-navigation/native';

export interface UserCardProps {
	user: UserSimple;
}

export function UserDetails() {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const route = useRoute<any>();
	const { id } = route.params;

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.wrapper}>
			{user ? (
				<>
					<View style={styles.userPhoto}>
						<MaterialCommunityIcons
							name='face-man-profile'
							color={'#e91e63'}
							size={200}
						/>
					</View>
					<Button title='Add user'></Button>
					<View style={styles.userBasicData}>
						<Text style={styles.name}>{user.name}</Text>
						<Text style={styles.username}>@{user.username}</Text>
					</View>
				</>
			) : (
				<Text>Loading...</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 20,
		width: '100%',
		gap: 20,
	},
	userPhoto: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
		aspectRatio: 1,
		width: '100%',
		borderRadius: 10,
	},
	userBasicData: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		width: '100%',
		padding: 20,
		borderRadius: 10,
	},
	name: {
		fontSize: 18,
	},
	username: {
		fontWeight: '200',
		fontSize: 15,
	},
});
