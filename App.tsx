import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/Navigation/BottomTabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<BottomTabsNavigator />
			</NavigationContainer>
      <StatusBar style='dark'/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
