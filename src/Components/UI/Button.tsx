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
	style?: StyleProp<TextStyle>;
	title: string;
	onPress: () => void;
}

export function Button(props: IconButtonProps) {
	const { title, style, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
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
    fontSize: 15
	},
});
