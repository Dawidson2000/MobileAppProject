import { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Task } from '../../Models/Tasks/Task';
import { TaskCard } from './TaskCard';
import { TaskFilters } from './TaskFilters';
import { TaskType } from '../../Models/Tasks/TaskType';

export function TasksList() {
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [selectedTaskType, setSelectedTaskType] = useState<TaskType>(
		TaskType.All
	);

	const fetchTasks = (id: number | undefined) => {
		if (id) {
			setLoading(true);
			fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
				.then((response) => response.json())
				.then((data) => {
					setTasks(data);
					setLoading(false);
				});
		} else {
			setTasks([]);
		}
	};

	const filteredTasks = useCallback(() => {
		switch (selectedTaskType) {
			case TaskType.All:
				return tasks;
			case TaskType.OnlyClosed:
				return tasks.filter((task) => task.completed === false);
			case TaskType.OnlyCompleted:
				return tasks.filter((task) => task.completed === true);
		}
	}, [tasks, selectedTaskType]);

	const changeTaskHandler = (change: Partial<Task>) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => {
				return task.id === change.id ? { ...task, ...change } : task;
			})
		);
	};

	return (
		<View style={styles.wrapper}>
			<TaskFilters
				onUserChange={fetchTasks}
				selectedTaskType={selectedTaskType}
				onTaskTypeChange={(type: TaskType) => setSelectedTaskType(type)}
			/>
			{loading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={filteredTasks()}
					renderItem={({ item }) => (
						<TaskCard task={item} onChangeStatus={changeTaskHandler} />
					)}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.listContent}
					style={styles.list}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 10,
		width: '100%',
	},
	listContent: {
		gap: 15,
	},
	list: {
		width: '100%',
	},
});
