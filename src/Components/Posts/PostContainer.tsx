import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../Styles/colors';
import { Post } from '../../Models/Posts/Post';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../Store/applicationState';
import { selectUserById } from '../../Store/Users/selectors';

interface PostProps {
	post: Post;
}

export function PostContainer(props: PostProps) {
	const { post } = props;
	
  const user = useSelector((state: ApplicationState) =>
		selectUserById(state, post.userId)
	);

	return (
		<View style={styles.wrapper}>
			<View style={styles.postHeader}>
				<View style={styles.userPhoto}>
					<MaterialCommunityIcons
						name='face-man-profile'
						color={COLOR.mainAccent}
						size={30}
					/>
				</View>
				<View>
					<Text>{user?.name}</Text>
					<Text style={styles.username}>@{user?.username}</Text>
				</View>
			</View>
			<Text style={styles.title}>{post.title}</Text>
			<Text>{post.body}</Text>
			<Text style={styles.comments}>{post.numberOfComments} Comments</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10,
		width: '100%',
		borderRadius: 10,
		backgroundColor: '#fff',
	},
	postHeader: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userPhoto: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd',
		height: 50,
		width: 50,
		borderRadius: 10,
	},
	username: {
		fontWeight: '200',
	},
	title: {
		fontWeight: 'bold',
		marginVertical: 5,
	},
	comments: {
		marginTop: 5,
		marginLeft: 'auto',
	},
});
