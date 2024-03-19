import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLOR } from '../../Styles/colors';
import { PostCard } from './PostsFeed/PostCard';
import { CommentsSection } from './Comments/CommentsSection';

export function PostDetails() {
	const route = useRoute<any>();
	const { post } = route.params;

	return (
		<View style={styles.wrapper}>
			{post && (
				<>
					<PostCard post={post} />
					<CommentsSection />
				</>
			)}
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
