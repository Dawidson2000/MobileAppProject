import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	StyleSheet,
	ActivityIndicator,
	FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CommentContainer } from './CommentContainer';
import { Comment } from '../../../Models/Posts/Comment';
import { COLOR } from '../../../Styles/colors';
import { InputBar } from './InputBar';

export function CommentsSection() {
	const [comments, setComments] = useState<Comment[]>([]);
	const [loading, setLoading] = useState(false);

	const route = useRoute<any>();
	const { post } = route.params;

	const listRef = useRef<FlatList>(null);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
			.then((response) => response.json())
			.then((data) => {
				setComments(data);
				setLoading(false);
			});
	}, []);

	const addCommentHandler = (value: string) => {
		const newComment: Comment = {
			email: 'yourEmail@gmail.com',
			body: value,
			name: '',
			id: comments.length + 1,
		};

		setComments((prevComments) => {
			return [newComment, ...prevComments];
		});

		listRef.current?.scrollToIndex({ animated: true, index: 0 });
	};

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<ActivityIndicator color={COLOR.mainAccent} />
			) : (
				<>
					<FlatList
						data={comments}
						renderItem={({ item }) => <CommentContainer comment={item} />}
						keyExtractor={(item) => item.id.toString()}
						contentContainerStyle={styles.listContent}
						style={styles.list}
						ref={listRef}
					/>
					<InputBar addCommentHandler={addCommentHandler} />
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
    paddingTop: 10,
	},
	listContent: {
		gap: 15,
	},
	list: {
		width: '100%',
	},
	input: {
		backgroundColor: '#fff',
		width: '100%',
		padding: 10,
		borderRadius: 10,
	},
});
