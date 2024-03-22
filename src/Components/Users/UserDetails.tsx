import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { UserSimple } from '../../Models/Users/UserSimple';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { User } from '../../Models/Users/User';
import { useRoute } from '@react-navigation/native';
import { Button } from '../UI/Button';
import { COLOR } from '../../Styles/colors';
import { addUser } from '../../Store/Users/usersSlice';
import { useDispatch } from 'react-redux';

export function UserDetails() {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const route = useRoute<any>();
	const dispatch = useDispatch();

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

	const addUserHandler = (user: UserSimple) => {
		dispatch(addUser(user));
	};

	return (
		<View style={styles.wrapper}>
			{user && !loading ? (
				<>
					<View style={styles.userPhoto}>
						<MaterialCommunityIcons
							name='face-man-profile'
							color={COLOR.mainAccent}
							size={200}
						/>
					</View>
					<Button
						title='Add user'
						style={styles.button}
						onPress={() => addUserHandler(user)}
					/>
					<View style={styles.userBasicData}>
						<Text style={styles.name}>{user.name}</Text>
						<Text style={styles.username}>@{user.username}</Text>
					</View>
				</>
			) : (
				<ActivityIndicator color={COLOR.mainAccent} />
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
	button: {
		width: '100%',
	},
});
