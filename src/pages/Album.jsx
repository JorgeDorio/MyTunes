import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
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
      <HeaderNoSearch />
      {albumDetails && <div className='albumArtworkFrame'><img className='albumArtwork' src={albumDetails.artworkUrl100} /><p>{albumDetails.artistName}</p></div>}
      <div className='audioBody'>
        {currentAlbum.map((music) => (
          <div>
            <div className='trackBody'>
              {music.trackName}
            </div>
            <audio src={music.previewUrl} controls className='audioTrack' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
