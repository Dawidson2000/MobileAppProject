import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { UserSimple } from '../../Models/UserSimple';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export interface UserCardProps {
	user: UserSimple;
}

export function UserCard(props: UserCardProps) {
	const { user } = props;
	const navigation = useNavigation<any>();

	return (
		<TouchableHighlight
			onPress={() => navigation.navigate('UserDetails', { id: user.id })}
		>
			<View style={styles.wrapper}>
				<View style={styles.userPhoto}>
					<MaterialCommunityIcons
						name='face-man-profile'
						color={'#e91e63'}
						size={30}
					/>
				</View>
				<View>
					<Text>{user.name}</Text>
					<Text style={styles.username}>@{user.username}</Text>
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
});
