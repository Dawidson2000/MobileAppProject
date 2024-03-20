import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextInputProps {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}

export function CustomTextInput(props: TextInputProps) {
	const { placeholder, value, onChange } = props;

	return (
		<TextInput
			value={value}
			style={styles.input}
			placeholder={placeholder}
			onChangeText={onChange}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#fff',
		width: '100%',
		padding: 10,
		borderRadius: 10,
	},
});
