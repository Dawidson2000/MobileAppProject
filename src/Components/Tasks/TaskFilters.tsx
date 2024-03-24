import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import { TaskType } from '../../Models/Tasks/TaskType';
import { Button } from '../UI/Button';
import { selectSubscribedUsers } from '../../Store/Users/selectors';
import { COLOR } from '../../Styles/colors';

interface UserSelectProps {
	selectedTaskType: TaskType;
	onUserChange: (id: number | undefined) => void;
	onTaskTypeChange: (type: TaskType) => void;
}

export function TaskFilters(props: UserSelectProps) {
	const { onTaskTypeChange, onUserChange, selectedTaskType } = props;

	const users = useSelector(selectSubscribedUsers);

	return (
		<View style={styles.wrapper}>
			<RNPickerSelect
				onValueChange={(value) => onUserChange(value)}
				items={users.map((user) => ({ label: user.name, value: user.id }))}
				style={pickerSelectStyles}
				useNativeAndroidPickerStyle={false}    
			/>
			<View style={styles.buttons}>
				<Button
					title='Completed'
					onPress={() => onTaskTypeChange(TaskType.OnlyCompleted)}
					disabled={selectedTaskType === TaskType.OnlyCompleted}
          style={{backgroundColor: COLOR.completed}}
				/>
				<Button
					title='In progress'
					onPress={() => onTaskTypeChange(TaskType.OnlyClosed)}
					disabled={selectedTaskType === TaskType.OnlyClosed}
          style={{backgroundColor: COLOR.inProgress}}
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

const pickerSelectStyles = StyleSheet.create({
	inputAndroid: {
		backgroundColor: '#fff',
		borderRadius: 10,
		height: 50,
		paddingHorizontal: 10,
		width: '100%',
	},
	inputAndroidContainer: {
		minWidth: '100%',
	},
	inputIOS: {
		backgroundColor: '#fff',
		borderRadius: 10,
		height: 50,
		paddingHorizontal: 10,
	},
});

const styles = StyleSheet.create({
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
