import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { User } from '../../../Models/Users/User';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../../Styles/colors';

export interface UserInfoProps {
	user: User;
}

export function UserInfo(props: UserInfoProps) {
	const { user } = props;

	return (
		<View style={styles.wrapper}>
			<Text style={styles.header}>Informations</Text>
			<View style={styles.infoBar}>
				<MaterialCommunityIcons
					name='phone'
					color={COLOR.mainAccent}
					size={20}
				/>
				<Text>{user.phone}</Text>
			</View>
			<View style={styles.infoBar}>
				<MaterialCommunityIcons name='web' color={COLOR.mainAccent} size={20} />
				<Text>{user.website}</Text>
			</View>
			<View style={styles.infoBar}>
				<MaterialCommunityIcons
					name='office-building-outline'
					color={COLOR.mainAccent}
					size={20}
				/>
				<Text>{user.company.name}</Text>
			</View>
			<View style={styles.infoBar}>
				<MaterialCommunityIcons
					name='map-marker'
					color={COLOR.mainAccent}
					size={20}
				/>
				<Text>{`${user.address.zipcode} ${user.address.city} ${user.address.street}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 10,
		padding: 10,
		gap: 10,
	},
	header: {
		fontSize: 20,
		marginRight: 'auto',
	},
	infoBar: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
});
