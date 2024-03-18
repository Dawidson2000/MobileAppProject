import React from 'react';
import {
	StyleSheet,
	GestureResponderEvent,
	TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../Styles/colors';

export interface IconButtonProps {
	iconName: 'plus';
	onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export function IconButton(props: IconButtonProps) {
	const { iconName, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress}>
			<MaterialCommunityIcons
				name={iconName}
				color={COLOR.mainAccent}
				size={25}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
