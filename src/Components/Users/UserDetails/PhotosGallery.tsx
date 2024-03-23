import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';
import { Photo } from '../../../Models/Users/Photo';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

interface PhotosGalleryProps {
	photos: Photo[];
}

export function PhotosGallery(props: PhotosGalleryProps) {
	const { photos } = props;

	return (
		<View style={styles.wrapper}>
			<GestureHandlerRootView>
				<FlatList
					data={photos}
					renderItem={({ item }) => (
						<TouchableWithoutFeedback style={styles.wrapper}>
							<Image src={item.url} style={styles.photo} resizeMode='contain' />
						</TouchableWithoutFeedback>
					)}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={styles.listContent}
				/>
			</GestureHandlerRootView>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		padding: 10,
	},
	photo: {
		flex: 1,
		aspectRatio: 1,
		height: undefined,
		width: undefined,
	},
	listContent: {
		gap: 10,
	},
});
