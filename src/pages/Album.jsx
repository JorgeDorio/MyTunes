import React, { useEffect, useState } from 'react';
import HeaderNoSearch from '../components/HeaderNoSearch';
import getMusics from '../helpers/musicsAPI';
import heartCheck from '../helpers/heartCheck'

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
          <div key={music.trackId}>
            <div className='trackBody'>
              {music.trackName}
              <input id={`heart-${music.trackId}`} type="checkbox" onChange={() => console.log('mudou')} />
              <label for={`heart-${music.trackId}`}>❤</label>
              <style>
                {heartCheck(music.trackId)}
              </style>
            </div>
            <audio src={music.previewUrl} controls className='audioTrack' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
