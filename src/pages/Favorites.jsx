import React, { useEffect, useState } from "react";
import HeaderNoSearch from '../components/HeaderNoSearch'
import favoritesSongs from '../helpers/favoritesSongs'
import heartCheck from '../helpers/heartCheck'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const handleFavorite = (event, name, id, url) => {
    if (event.target.checked == true) {
      event.target.checked = false
      favoritesSongs.addToFavorites(name, id, url)
    } else {
      event.target.checked = true
      favoritesSongs.removeToFavorites(id)
    }
  }

  const checkVerification = (id) => {
    const hasCheck = favorites.filter((music) => music.trackId == id)
    const check = hasCheck.length ? true : false
    return check
  }

  useEffect(() => {
    const favorites = window.localStorage.getItem('favorites')
    setFavorites(JSON.parse(favorites))
  }, [])

  return (
    <div className="main-frame">
      <HeaderNoSearch />
      <div>
        <h1 className="pageTittle">Favorites</h1>
        {favorites && favorites.map((music) => (
          <div key={music.trackId}>
            <div className='trackBody'>
              {`${music.trackName} - ${music.artistName}`}
              <input checked={checkVerification(music.trackId)} id={`heart-${music.trackId}`} type="checkbox" onChange={(e) => handleFavorite(e, music.trackName, music.trackId, music.previewUrl)} />
              <label htmlFor={`heart-${music.trackId}`}>❤</label>
              <style>
                {heartCheck(music.trackId)}
              </style>
            </div>
            <audio src={music.previewUrl} controls className='audioTrack' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites;
