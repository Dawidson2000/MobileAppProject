import { View, Text, StyleSheet } from 'react-native';
import { Loader } from '../../UI/Loader';

interface FooterProps {
	loading: boolean;
	isEnd: boolean;
}

export function Footer(props: FooterProps) {
	const { isEnd, loading } = props;

	return (
		<View style={styles.wrapper}>
			{loading && <Loader />}
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
