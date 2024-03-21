import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../Styles/colors';
import { Post } from '../../Models/Posts/Post';
import { Task } from '../../Models/Tasks/Task';

interface PostProps {
	task: Task;
}

export function TaskCard(props: PostProps) {
	const { task } = props;

	return (
		<View style={styles.wrapper}>
			<View
				style={[
					styles.status,
					task.completed ? styles.completed : styles.closed,
				]}
			>
				<MaterialCommunityIcons
					name={task.completed ? 'check' : 'close'}
					color={task.completed ? COLOR.green : COLOR.red}
					size={35}
				/>
			</View>
			<View style={styles.content}>
				<Text>{task.title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#fff',
		gap: 10,
	},
	status: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 50,
		borderRadius: 10,
	},
	completed: {
		backgroundColor: COLOR.lightGreen,
	},
	closed: {
		backgroundColor: COLOR.lightRed,
	},
	content: {
		flex: 1,
	},
});
