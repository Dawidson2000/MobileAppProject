import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { Post } from '../Post';
import { Footer } from './Footer';

export function PostsFeed() {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [isEnd, setIsEnd] = useState(false);

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused && !isEnd) {
			setLoading(true);
			fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=10`
			)
				.then((response) => response.json())
				.then((data) => {
					if (data.length < 10) {
						setIsEnd(true);
					}
					setPosts((prevPosts) => [...prevPosts, ...data]);
					setLoading(false);
				});
		}
	}, [isFocused, page]);

	useEffect(() => {
		if (!isFocused) {
			setPosts([]);
			setIsEnd(false);
			setLoading(false);
			setPage(1);
		}
	}, [isFocused]);

	return (
		<View style={styles.wrapper}>
			{loading && posts.length < 10 ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={posts}
					renderItem={({ item }) => <Post post={item} />}
					keyExtractor={(item) => item.id.toString()}
					onEndReachedThreshold={0.2}
					onEndReached={() => {
						!loading && setPage((prevPage) => prevPage + 1);
					}}
					ListFooterComponent={<Footer loading={loading} isEnd={isEnd} />}
					contentContainerStyle={styles.listContent}
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
		padding: 20,
		width: '100%',
	},
	listContent: {
		gap: 15,
	},
});
