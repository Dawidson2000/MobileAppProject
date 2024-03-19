import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CommentsSection } from './Comments/CommentsSection';
import { PostContainer } from './PostContainer';

export function PostDetails() {
	const route = useRoute<any>();
	const { post } = route.params;

	return (
		<View style={styles.wrapper}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{post && (
					<>
						<PostContainer post={post} />
						<CommentsSection />
					</>
				)}
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: 20,
		width: '100%',
	},
});
