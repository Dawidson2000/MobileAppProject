import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../../Styles/colors';

interface FooterProps {
	loading: boolean;
	isEnd: boolean;
}

export function Footer(props: FooterProps) {
	const { isEnd, loading } = props;

	return (
		<View style={styles.wrapper}>
			{loading && <ActivityIndicator color={COLOR.mainAccent} />}
			{isEnd && <Text>No more posts at the moment</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
});
