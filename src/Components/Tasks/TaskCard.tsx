import React, { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../Styles/colors';
import { Task } from '../../Models/Tasks/Task';
import {
	GestureHandlerRootView,
	Swipeable,
} from 'react-native-gesture-handler';

interface PostProps {
	task: Task;
	onChangeStatus: (status: Partial<Task>) => void;
}

export function TaskCard(props: PostProps) {
	const { task, onChangeStatus } = props;

	const [isSwipeOpen, setIsSwipeOpen] = useState(false);
	const swipeableRef = useRef<Swipeable>(null);

	useEffect(() => {
		if (isSwipeOpen) {
			swipeableRef.current?.close();
			setIsSwipeOpen(false);
		}
	}, [isSwipeOpen]);

	const renderRightActions = () => {
		return (
			<View style={styles.swipe}>
				<MaterialCommunityIcons name={'close'} color={COLOR.red} size={35} />
			</View>
		);
	};

	const renderLeftActions = () => {
		return (
			<View style={styles.swipe}>
				<MaterialCommunityIcons name={'check'} color={COLOR.green} size={35} />
			</View>
		);
	};

	const swipeableHandler = (direction: 'left' | 'right') => {
		onChangeStatus(
			direction === 'left'
				? { id: task.id, completed: true }
				: { id: task.id, completed: false }
		);
		setIsSwipeOpen(true);
	};

	return (
		<GestureHandlerRootView>
			<Swipeable
				renderRightActions={renderRightActions}
				renderLeftActions={renderLeftActions}
				ref={swipeableRef}
				onSwipeableOpen={swipeableHandler}
			>
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
	swipe: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
});
