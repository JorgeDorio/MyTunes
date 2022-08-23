import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Album from './pages/Album';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/album/:id" element={<Album />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
