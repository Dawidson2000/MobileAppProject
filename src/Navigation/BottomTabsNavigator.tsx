import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Users } from '../Pages/Users';
import { Posts } from '../Pages/Posts';
import { COLOR } from '../Styles/colors';
import { Tasks } from '../Pages/Tasks';

export function BottomTabsNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName='Users'
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
						<MaterialCommunityIcons
							name='account-multiple'
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Posts'
				component={Posts}
				options={{
					tabBarLabel: 'Posts',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='post' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Tasks'
				component={Tasks}
				options={{
					tabBarLabel: 'Tasks',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='list-status' color={color} size={size} />
					),
          headerShown: true,
          headerTintColor: COLOR.mainAccent,
				}}
			/>
		</Tab.Navigator>
	);
}
