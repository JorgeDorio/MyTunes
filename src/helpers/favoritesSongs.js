const addToFavorites = (trackName, trackId, previewUrl, artistName) => {
  if (JSON.parse(window.localStorage.getItem('favorites')) == null) {
    window.localStorage.setItem('favorites', '[]')
  }
  const favorites = JSON.parse(window.localStorage.getItem('favorites'))
  favorites.push({ trackName, trackId, previewUrl, artistName })
  window.localStorage.setItem('favorites', JSON.stringify(favorites))
}

const removeToFavorites = (id) => {
  const favorites = JSON.parse(window.localStorage.getItem('favorites'))
  const removed = favorites.filter((song) => song.trackId != id)
  window.localStorage.setItem('favorites', JSON.stringify(removed))
  console.log(removed)
}

module.exports = { addToFavorites, removeToFavorites }
