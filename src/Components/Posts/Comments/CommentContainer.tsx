import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Comment } from '../../../Models/Posts/Comment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../../Styles/colors';

interface CommentProps {
	comment: Comment;
}

export function CommentContainer(props: CommentProps) {
	const { comment } = props;

	return (
		<View style={styles.wrapper}>
			<View style={styles.userPhoto}>
				<MaterialCommunityIcons
					name='face-woman-profile'
					color={COLOR.mainAccent}
					size={30}
				/>
			</View>
			<View style={styles.content}>
				<Text style={styles.email}>{comment.email}</Text>
				<Text>{comment.body}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		gap: 10,
	},
	userPhoto: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
		height: 50,
		width: 50,
		borderRadius: 10,
	},
	content: {
		backgroundColor: '#fff',
		padding: 10,
    borderRadius: 10,
    flex: 1,
	},
	email: {
		fontWeight: 'bold',
	},
});
