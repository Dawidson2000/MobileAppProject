import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Album } from '../../../Models/Users/Album';
import { PhotosModal } from './PhotosModal';
import { Loader } from '../../UI/Loader';

interface AlbumsProps {
	userId: number;
}

export function Albums(props: AlbumsProps) {
	const { userId } = props;

	const [albums, setAlbums] = useState<Album[]>([]);
	const [loading, setLoading] = useState(false);
	const [photosModal, setPhotosModal] = useState<{
		isOpen: boolean;
		albumId: number | undefined;
	}>({
		isOpen: false,
		albumId: undefined,
	});

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://jsonplaceholder.typicode.com/albums?userId=${userId}&_limit=4`
		)
			.then((response) => response.json())
			.then((data) => {
				setAlbums(data);
				setLoading(false);
			});
	}, []);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.header}>Albums</Text>
			<View style={styles.albums}>
				{loading ? (
					<Loader />
				) : (
					albums.map((album) => (
						<TouchableWithoutFeedback
							key={album.id}
							onPress={() =>
								setPhotosModal({ isOpen: true, albumId: album.id })
							}
						>
							<View style={styles.album}>
								<Text>{album.title}</Text>
							</View>
						</TouchableWithoutFeedback>
					))
				)}
			</View>
			{photosModal.isOpen && photosModal.albumId && (
				<PhotosModal
					isOpen={photosModal.isOpen}
					albumId={photosModal.albumId}
					onClose={() => setPhotosModal({ isOpen: false, albumId: undefined })}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 10,
	},
	header: {
		fontSize: 20,
		marginRight: 'auto',
		marginBottom: 10,
	},
	albums: { flexDirection: 'row', gap: 5, flexWrap: 'wrap' },
	album: {
		height: 100,
		backgroundColor: '#ddd',
		flexBasis: '30%',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		padding: 5,
	},
});
