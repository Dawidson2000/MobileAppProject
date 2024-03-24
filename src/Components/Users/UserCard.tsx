import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { UserSimple } from '../../Models/Users/UserSimple';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '../UI/IconButton';
import { COLOR } from '../../Styles/colors';
import { useDispatch } from 'react-redux';
import { subscribeUser } from '../../Store/Users/usersSlice';

export interface UserCardProps {
	user: UserSimple;
}

export function UserCard(props: UserCardProps) {
	const { user } = props;
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const subscribeUserHandler = () => {
		dispatch(subscribeUser(user.id));
	};

	return (
		<TouchableHighlight
			onPress={() => navigation.navigate('UserDetails', { id: user.id })}
			style={styles.touchable}
		>
			<View style={styles.wrapper}>
				<View style={styles.userPhoto}>
					<MaterialCommunityIcons
						name='face-man-profile'
						color={COLOR.mainAccent}
						size={30}
					/>
				</View>
				<View>
					<Text>{user.name}</Text>
					<Text style={styles.username}>@{user.username}</Text>
				</View>
				<View style={styles.buttons}>
					{user.isSubscribed ? (
						<MaterialCommunityIcons
							name='bell-check-outline'
							color={COLOR.grey}
							size={30}
						/>
					) : (
						<IconButton
							iconName='bell-outline'
							onPress={() => subscribeUserHandler()}
						/>
					)}
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#fff',
		width: '100%',
		height: 70,
		borderRadius: 10,
		padding: 10,
		gap: 10,
	},
	username: {
		fontWeight: '200',
	},
	userPhoto: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
		height: 50,
		width: 50,
		borderRadius: 10,
	},
	touchable: {
		borderRadius: 10,
	},
	buttons: {
		marginLeft: 'auto',
		paddingRight: 15,
	},
});
