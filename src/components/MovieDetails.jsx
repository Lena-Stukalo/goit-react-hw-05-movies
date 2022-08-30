import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getByID } from 'services/APIwork';
import styled from 'styled-components';
const NavItem = styled(NavLink)`
  display: block;
  padding: 5px;
  font-size: 14px;
  background-color: #f7a372;
  width:100px;
  text-align: center;
  color:#fff;
  text-decoration: none;

  }
`;

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    getByID(movieID).then(setMovie);
  }, [movieID]);
  if (!movie) {
    return;
  }
  const { title, overview, poster_path, genres, vote_average } = movie;
  const goBack = location.state?.from ?? '/';
  return (
    <div>
      <NavItem to={goBack}> Go back</NavItem>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        width={300}
      />
      <h2>{title}</h2>
      <p>{`User score :${Math.trunc(vote_average * 10)}%`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Geners</h3>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </div>
  );
};
export default MovieDetails;
