import React, { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { COLOR } from '../../Styles/colors';
import { Post } from '../../Models/Posts/Post';
import { Task } from '../../Models/Tasks/Task';
import {
	GestureHandlerRootView,
	Swipeable,
} from 'react-native-gesture-handler';
import { Button } from '../UI/Button';

interface PostProps {
	task: Task;
}

export function TaskCard(props: PostProps) {
	const { task } = props;

	const [isCompleted, setIsCompleted] = useState(task.completed);
	const [isSwipeOpen, setIsSwipeOpen] = useState(false);
	const swipeableRef = useRef<any>(null);

	useEffect(() => {
		if (isSwipeOpen) {
			swipeableRef.current.close();
			setIsSwipeOpen(false);
		}
	}, [isSwipeOpen]);

	const renderRightActions = () => {
		return (
			<View>
				<Text>Finish</Text>
			</View>
		);
	};

	const renderLeftActions = () => {
		return (
			<View>
				<Text>Open</Text>
			</View>
		);
	};

	return (
		<GestureHandlerRootView>
			<Swipeable
				renderRightActions={renderRightActions}
				renderLeftActions={renderLeftActions}
				ref={swipeableRef}
				onSwipeableOpen={(direction) => {
					direction === 'left' ? setIsCompleted(true) : setIsCompleted(false);
					setIsSwipeOpen(true);
				}}
			>
				<View style={styles.wrapper}>
					<View
						style={[
							styles.status,
							isCompleted ? styles.completed : styles.closed,
						]}
					>
						<MaterialCommunityIcons
							name={isCompleted ? 'check' : 'close'}
							color={isCompleted ? COLOR.green : COLOR.red}
							size={35}
						/>
					</View>
					<View style={styles.content}>
						<Text>{task.title}</Text>
					</View>
				</View>
			</Swipeable>
		</GestureHandlerRootView>
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
