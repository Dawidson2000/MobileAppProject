import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	StyleProp,
	TextStyle,
} from 'react-native';
import { COLOR } from '../../Styles/colors';

export interface IconButtonProps {
	title: string;
	disabled?: boolean;
	style?: StyleProp<TextStyle>;
	onPress: () => void;
}

export function Button(props: IconButtonProps) {
	const { title, style, disabled, onPress } = props;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, style, disabled && styles.disabled]}
      disabled={disabled}
		>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: COLOR.mainAccent,
		paddingVertical: 10,
		paddingHorizontal: 25,
		borderRadius: 10,
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
	},
	disabled: {
		opacity: 0.3,
	},
});
