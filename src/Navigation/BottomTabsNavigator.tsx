import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Users } from '../Pages/Users';
import { Profile } from '../Pages/Profile';
import { COLOR } from '../Styles/colors';

export function BottomTabsNavigator() {
	const Tab = createBottomTabNavigator();
	
  return (
		<Tab.Navigator
			initialRouteName='Feed'
			screenOptions={{
				tabBarActiveTintColor: COLOR.mainAccent,
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Users'
				component={Users}
				options={{
					tabBarLabel: 'Users',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='account-multiple' color={color} size={size} />
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
