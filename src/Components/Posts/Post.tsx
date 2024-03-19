import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';

interface PostProps {
	post: any;
}

export function Post(props: PostProps) {
	// const { title } = props;

	return (
		<View style={styles.wrapper}>
			<Text>{props.post.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10,
		width: '100%',
		borderRadius: 10,
		backgroundColor: '#fff',
    minHeight: 100,
	},
});
