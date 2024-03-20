import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { CustomTextInput } from '../../UI/TextInput';
import { IconButton } from '../../UI/IconButton';

interface InputBarProps {
	addCommentHandler: (value: string) => void;
}

export function InputBar(props: InputBarProps) {
	const { addCommentHandler } = props;

	const [text, setText] = useState('');

	const addComment = () => {
		addCommentHandler(text);
		setText('');
	};

	return (
		<View style={styles.wrapper}>
			<CustomTextInput
				value={text}
				placeholder='Type comment'
				onChange={(value) => setText(value)}
			/>
			<IconButton iconName='send' onPress={addComment} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingHorizontal: 20,
    paddingTop: 10,
	},
});
