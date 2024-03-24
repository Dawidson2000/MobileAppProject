import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { TaskType } from '../../Models/Tasks/TaskType';
import { Button } from '../UI/Button';
import { selectSubscribedUsers } from '../../Store/Users/selectors';
import { COLOR } from '../../Styles/colors';
import SelectDropdown from 'react-native-select-dropdown';
import { UserSimple } from '../../Models/Users/UserSimple';
import { useEffect, useRef } from 'react';

interface UserSelectProps {
	selectedTaskType: TaskType;
	onUserChange: (id: number | undefined) => void;
	onTaskTypeChange: (type: TaskType) => void;
}

export function TaskFilters(props: UserSelectProps) {
	const { onTaskTypeChange, onUserChange, selectedTaskType } = props;
	const inputRef = useRef<SelectDropdown>(null);

	const users = useSelector(selectSubscribedUsers);

	useEffect(() => {
		inputRef.current?.reset();
		onUserChange(undefined);
	}, [users.length]);

	return (
		<View style={styles.wrapper}>
			<SelectDropdown
				data={users}
				onSelect={(user: UserSimple) => {
					onUserChange(user.id);
				}}
				rowTextForSelection={(user: UserSimple) => user.name}
				buttonTextAfterSelection={(user: UserSimple) => user.name}
				buttonStyle={[styles.input, users.length === 0 && styles.disabled]}
				dropdownStyle={styles.dropdown}
				defaultButtonText={users.length === 0 ? 'No users subcribed' : 'Select user'}
				ref={inputRef}
				disabled={users.length === 0}
			/>
			<View style={styles.buttons}>
				<Button
					title='Completed'
					onPress={() => onTaskTypeChange(TaskType.OnlyCompleted)}
					disabled={selectedTaskType === TaskType.OnlyCompleted}
					style={{ backgroundColor: COLOR.completed }}
				/>
				<Button
					title='In progress'
					onPress={() => onTaskTypeChange(TaskType.OnlyClosed)}
					disabled={selectedTaskType === TaskType.OnlyClosed}
					style={{ backgroundColor: COLOR.inProgress }}
				/>
				<Button
					title='All'
					onPress={() => onTaskTypeChange(TaskType.All)}
					disabled={selectedTaskType === TaskType.All}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#fff',
		borderRadius: 10,
		height: 50,
		paddingHorizontal: 10,
		width: '100%',
	},
	disabled: {
		opacity: 0.4,
	},
	dropdown: { borderRadius: 10 },
	wrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		gap: 15,
		marginBottom: 15,
	},
	buttons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
});
