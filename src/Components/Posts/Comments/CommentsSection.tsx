import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CommentContainer } from './CommentContainer';
import { Comment } from '../../../Models/Posts/Comment';
import { InputBar } from './InputBar';
import { Loader } from '../../UI/Loader';

interface CommentsSectionProps {
	postId: number;
}

export function CommentsSection(props: CommentsSectionProps) {
	const { postId } = props;

	const [comments, setComments] = useState<Comment[]>([]);
	const [loading, setLoading] = useState(false);

	const listRef = useRef<FlatList>(null);

	useEffect(() => {
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
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
			id: comments.length + 2,
		};

		setComments((prevComments) => {
			return [newComment, ...prevComments];
		});

		listRef.current?.scrollToIndex({ animated: true, index: 0 });
	};

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<Loader />
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
		justifyContent: 'center',
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
