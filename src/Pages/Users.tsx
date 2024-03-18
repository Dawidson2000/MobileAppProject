import { UserDetails } from '../Components/Users/UserDetails';
import { UsersList } from '../Components/Users/UsersList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UsersStack = createNativeStackNavigator();

export function Users() {
	return (
		<UsersStack.Navigator>
			<UsersStack.Screen name='UsersList' component={UsersList} />
			<UsersStack.Screen name='UserDetails' component={UserDetails} />
		</UsersStack.Navigator>
	);
}
