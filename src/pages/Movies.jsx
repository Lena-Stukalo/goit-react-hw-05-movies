import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { serchByName } from 'services/APIwork';
import styled from 'styled-components';
const NavItem = styled(NavLink)`
  display: block;
  padding: 5px;
  font-size: 14px;
  color: black;
  }
`;
const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState('');
  const onInputChange = event => {
    setValue(event.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    serchByName(value).then(movies => {
      setMovies(movies.results);
    });
    setValue('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Serch movie"
          autoComplete="off"
          autoFocus
          required
          value={value}
          onChange={onInputChange}
        />
        <button type="sublit">Serch</button>
      </form>
      <ul>
        {movies
          ? movies.map(movie => {
              return (
                <NavItem key={movie.id} to={`movies/:${movie.id}`}>
                  {movie.title}
                </NavItem>
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default Movies;
