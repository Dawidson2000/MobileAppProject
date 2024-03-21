import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { PostCard } from './PostCard';
import { Footer } from './Footer';
import { Post } from '../../../Models/Posts/Post';

export function PostsFeed() {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<Post[]>([]);
	const [page, setPage] = useState(1);
	const [isEnd, setIsEnd] = useState(false);

	useEffect(() => {
		if (!isEnd) {
			setLoading(true);
			fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=10&_embed=comments`
			)
				.then((response) => response.json())
				.then((data) => {
					const posts: Post[] = data.map(
						(item: any) =>
							({ ...item, numberOfComments: item.comments.length } as Post)
					);
					if (posts.length < 10) {
						setIsEnd(true);
					}
					setPosts((prevPosts) =>
						page === 1 ? posts : [...prevPosts, ...posts]
					);
					setLoading(false);
				});
		}
	}, [page]);

	const refreshHandler = () => {
		setPage(1);
	};

	return (
		<View style={styles.wrapper}>
			{loading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={posts}
					renderItem={({ item }) => <PostCard post={item} />}
					keyExtractor={(item) => item.id.toString()}
					onEndReachedThreshold={0.2}
					onEndReached={() => {
						!loading && setPage((prevPage) => prevPage + 1);
					}}
					ListFooterComponent={<Footer loading={loading} isEnd={isEnd} />}
					contentContainerStyle={styles.listContent}
					refreshing={loading}
					onRefresh={refreshHandler}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
		width: '100%',
	},
	listContent: {
		gap: 15,
	},
});
