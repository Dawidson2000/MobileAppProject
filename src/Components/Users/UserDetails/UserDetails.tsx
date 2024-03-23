import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	ScrollView,
} from 'react-native';
import { UserSimple } from '../../../Models/Users/UserSimple';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { User } from '../../../Models/Users/User';
import { useRoute } from '@react-navigation/native';
import { Button } from '../../UI/Button';
import { COLOR } from '../../../Styles/colors';
import {
	subscribeUser,
	unsubscribeUser,
} from '../../../Store/Users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../Store/applicationState';
import { selectUserById } from '../../../Store/Users/selectors';
import { IconButton } from '../../UI/IconButton';
import { Albums } from './Albums';

export function UserDetails() {
	const route = useRoute<any>();
	const { id } = route.params;

	const userStore = useSelector((state: ApplicationState) =>
		selectUserById(state, id)
	);

	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			});
	}, []);

	const subscribeUserHandler = (user: UserSimple) => {
		dispatch(subscribeUser(user.id));
	};

	const unsubscribeUserHandler = (user: UserSimple) => {
		dispatch(unsubscribeUser(user.id));
	};

	return (
		<View style={styles.wrapper}>
			{user && !loading ? (
				<>
					<ScrollView contentContainerStyle={styles.scrollView}>
						<View style={styles.userPhoto}>
							<MaterialCommunityIcons
								name='face-man-profile'
								color={COLOR.mainAccent}
								size={200}
							/>
						</View>
						<View style={styles.buttons}>
							<Button
								title={
									userStore?.isSubscribed ? 'Subscribed' : 'Subscribe user'
								}
								style={styles.button}
								onPress={() => subscribeUserHandler(user)}
								disabled={userStore?.isSubscribed}
							/>
							{userStore?.isSubscribed && (
								<IconButton
									iconName='close'
									size={40}
									onPress={() => unsubscribeUserHandler(user)}
								/>
							)}
						</View>
						<View style={styles.userBasicData}>
							<Text style={styles.name}>{user.name}</Text>
							<Text style={styles.username}>@{user.username}</Text>
						</View>
						<Albums userId={user.id} />
					</ScrollView>
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
		padding: 10,
		width: '100%',
		gap: 15,
	},
	scrollView: {
		gap: 15,
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
		padding: 10,
		borderRadius: 10,
	},
	name: {
		fontSize: 20,
	},
	username: {
		fontWeight: '200',
		fontSize: 20,
	},
	buttons: {
		flexDirection: 'row',
		gap: 15,
		alignItems: 'center',
		height: 40,
	},
	button: {
		flex: 1,
	},
});
