import axios from 'axios';

const api = axios.create({
	baseURL: 'https://my-tunes-backend.herokuapp.com/',
	timeout: 2500,
});

export default api;
