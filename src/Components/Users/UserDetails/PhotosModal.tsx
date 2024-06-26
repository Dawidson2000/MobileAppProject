import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';
import { Photo } from '../../../Models/Users/Photo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PhotosGallery } from './PhotosGallery';
import { Loader } from '../../UI/Loader';

interface PhotosModalProps {
	isOpen: boolean;
	onClose: () => void;
	albumId: number;
}

export function PhotosModal(props: PhotosModalProps) {
	const { isOpen, albumId, onClose } = props;

	const [photos, setPhotos] = useState<Photo[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=10`
		)
			.then((response) => response.json())
			.then((data) => {
				setPhotos(data);
				setLoading(false);
			});
	}, []);

	return (
		<SafeAreaView style={styles.wrapper}>
			<Modal
				animationType='fade'
				transparent={true}
				visible={isOpen}
				onRequestClose={() => {
					onClose();
				}}
			>
				<Pressable
					onPress={(event) => event.target == event.currentTarget && onClose()}
					style={styles.body}
				>
					<View style={styles.content}>
						{loading ? <Loader /> : <PhotosGallery photos={photos} />}
					</View>
				</Pressable>
			</Modal>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	content: {
		backgroundColor: '#fff',
		height: '60%',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
