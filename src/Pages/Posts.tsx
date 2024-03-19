import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLOR } from '../Styles/colors';
import { PostsFeed } from '../Components/Posts/PostsFeed/PostsFeed';
import { PostDetails } from '../Components/Posts/PostDetails';

const PostsStack = createNativeStackNavigator();

export function Posts() {
	return (
		<PostsStack.Navigator
			screenOptions={{
				headerTintColor: COLOR.mainAccent,
			}}
		>
			<PostsStack.Screen
				name='PostsFeed'
				options={{ title: 'Posts' }}
				component={PostsFeed}
			/>
			<PostsStack.Screen
				name='PostDetails'
				options={{ title: 'Post details' }}
				component={PostDetails}
			/>
		</PostsStack.Navigator>
	);
}
