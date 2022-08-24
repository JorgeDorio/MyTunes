import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Album from './pages/Album';
import Favorites from './pages/Favorites'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
