import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Post } from '../../../Models/Posts/Post';
import { PostContainer } from '../PostContainer';
import { useNavigation } from '@react-navigation/native';

interface PostProps {
	post: Post;
}

export function PostCard(props: PostProps) {
	const { post } = props;
	const navigation = useNavigation<any>();

	return (
		<TouchableHighlight
			onPress={() => navigation.navigate('PostDetails', { post: post })}
			style={styles.touchable}
		>
			<PostContainer post={post} />
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	touchable: {
		borderRadius: 10,
	},
});
