import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CommentContainer } from './CommentContainer';
import { Comment } from '../../../Models/Posts/Comment';
import { COLOR } from '../../../Styles/colors';

export function CommentsSection() {
	const [comments, setComments] = useState<Comment[]>([]);
	const [loading, setLoading] = useState(false);

	const route = useRoute<any>();
	const { post } = route.params;

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
			.then((response) => response.json())
			.then((data) => {
				setComments(data);
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<ActivityIndicator color={COLOR.mainAccent} />
			) : (
				<FlatList
					data={comments}
					renderItem={({ item }) => <CommentContainer comment={item} />}
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 20,
	},
	listContent: {
		gap: 15,
	},
	list: {
		width: '100%',
	},
});
