import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/Navigation/BottomTabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import store from './src/Store/store';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={'height'}
				style={styles.container}
				keyboardVerticalOffset={-64}
			>
				<Provider store={store}>
					<NavigationContainer>
						<BottomTabsNavigator />
					</NavigationContainer>
				</Provider>
				<StatusBar style='dark' />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
