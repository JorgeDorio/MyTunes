const getMusics = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  requestJson.results.shift()
  return requestJson.results;
};

export default getMusics;
