import React from 'react';
import {
	StyleSheet,
	GestureResponderEvent,
	TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../Styles/colors';

export interface IconButtonProps {
	iconName: 'plus' | 'send' | 'check' | 'close' | 'refresh';
	disabled?: boolean;
	onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export function IconButton(props: IconButtonProps) {
	const { iconName, disabled, onPress } = props;

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			style={disabled && styles.disabled}
		>
			<MaterialCommunityIcons
				name={iconName}
				color={COLOR.mainAccent}
				size={30}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	disabled: {
		opacity: 0.3,
	},
});
