import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import getMusics from '../helpers/musicsAPI'; 

const Album = () => {
	const id =  document.location.pathname.split('/')[2];
	const  [currentAlbum,  setCurrentAlbum] = useState([]);
	const [albumDetails,  setAlbumDetails] = useState({collectionName: ''});
	const getAlbum = async () => {
		const album  = await getMusics(id);
		setAlbumDetails(album.shift());
		setCurrentAlbum(album);
		console.log(currentAlbum[0]);
	};

	useEffect(() => {
		getAlbum();
	},[]);

	return (
		<div className="main-frame">
			<Header/> 
			{currentAlbum && <p>render</p>}
		</div>
	);
};

export default Album;
