import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Nawigation';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
