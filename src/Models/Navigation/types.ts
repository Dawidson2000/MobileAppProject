import { RouteProp } from '@react-navigation/native';
import { Post } from '../Posts/Post';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	PostDetails: { post: Post };
	UserDetails: { id: number };
};

export type PostDetailsRouteProp = RouteProp<RootStackParamList, "PostDetails">;
export type UserDetailsRouteProp = RouteProp<RootStackParamList, "UserDetails">;
