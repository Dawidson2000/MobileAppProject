import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import { TaskType } from '../../Models/Tasks/TaskType';
import { Button } from '../UI/Button';
import { selectAddedUsers } from '../../Store/Users/selectors';

interface UserSelectProps {
	onUserChange: (id: string | undefined) => void;
	onTaskTypeChange: (type: TaskType) => void;
}

export function TaskFilters(props: UserSelectProps) {
	const { onTaskTypeChange, onUserChange } = props;

	const users = useSelector(selectAddedUsers);

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
				/>
				<Button
					title='Closed'
					onPress={() => onTaskTypeChange(TaskType.OnlyClosed)}
				/>
				<Button title='All' onPress={() => onTaskTypeChange(TaskType.All)} />
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
