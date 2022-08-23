import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import getMusics from '../helpers/musicsAPI';

const Album = () => {
  const id = document.location.pathname.split('/')[2];
  const [currentAlbum, setCurrentAlbum] = useState([]);
  const [albumDetails, setAlbumDetails] = useState();
  const getAlbum = async () => {
    const album = await getMusics(id);
    setAlbumDetails(album.shift());
    setCurrentAlbum(album);
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <div className="main-frame">
      <Header />
      {albumDetails && <div className='albumArtworkFrame'><img className='albumArtwork' src={albumDetails.artworkUrl100} /><p>{albumDetails.artistName}</p></div>}
      <div className='audioBody'>
        {currentAlbum.map((music) => (
          <div className='trackBody'>
            {music.trackName}
            {/* <input id="heart" type="checkbox" /> */}
            {/* <label for="heart">❤</label> */}
            <span><audio src={music.previewUrl} controls className='audioTrack' /></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
