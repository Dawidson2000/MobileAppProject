import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLOR } from '../../Styles/colors';

export function Loader() {
	return <ActivityIndicator color={COLOR.mainAccent} />;
}
