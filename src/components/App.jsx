import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LayOut from './Layout';
import Home from 'pages/Home';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = lazy(() => import('./MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MovieDetails />}>
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
