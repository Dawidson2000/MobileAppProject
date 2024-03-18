import { UserDetails } from '../Components/Users/UserDetails';
import { UsersList } from '../Components/Users/UsersList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UsersStack = createNativeStackNavigator();

export function Users() {
	return (
		<UsersStack.Navigator
			screenOptions={{
				headerTintColor: '#e91e63',
			}}
		>
			<UsersStack.Screen
				name='UsersList'
				options={{ title: 'Users list' }}
				component={UsersList}
			/>
			<UsersStack.Screen
				name='UserDetails'
				options={{ title: 'User details' }}
				component={UserDetails}
			/>
		</UsersStack.Navigator>
	);
}
