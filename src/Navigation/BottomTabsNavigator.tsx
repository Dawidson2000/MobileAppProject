import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Users } from '../Pages/Users';
import { Profile } from '../Pages/Profile';

export function BottomTabsNavigator() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			initialRouteName='Feed'
			screenOptions={{
				tabBarActiveTintColor: '#e91e63',
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Users'
				component={Users}
				options={{
					tabBarLabel: 'Users',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='home' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='bell' color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
