import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import searchAlbumsAPI from '../helpers/searchAlbumsAPI';
import Lupa from '../images/lupa.png'

const BodySearch = () => {
  const { searchedTerm, setAlbumApiResult, albumApiResult, setCurrentAlbumId, buttonState, setSearch } =
    useContext(MyContext);

  const getAlbums = async (name) => {
    const albuns = await searchAlbumsAPI(name);
    setAlbumApiResult(albuns);
  };

  useEffect(() => {
    getAlbums(searchedTerm);
  }, [buttonState]);
  return (

    <div className="body-search">
      {albumApiResult.map((album) => (
        <a className="card" onClick={() => setCurrentAlbumId(album.collectionId)} key={album.collectionId} href={`${document.location.origin}/album/${album.collectionId}`}>
          <img src={album.artworkUrl100} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.collectionName}</h5>
            <p className="card-text">{album.artistName}</p>
          </div>
        </a>
      ))}
      {!albumApiResult.length && (
        <div className='home-page'>
          <p>
            Nothing here for now... How about searching for your favorite singer or band?
          </p>
          <img className='lupa' src={Lupa} />
        </div>
      )}
    </div>
  );
};

export default BodySearch;
