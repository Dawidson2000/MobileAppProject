import { UserDetails } from '../Components/Users/UserDetails';
import { UsersList } from '../Components/Users/UsersList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLOR } from '../Styles/colors';

const UsersStack = createNativeStackNavigator();

export function Users() {
	return (
		<UsersStack.Navigator
			screenOptions={{
				headerTintColor: COLOR.mainAccent,
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
