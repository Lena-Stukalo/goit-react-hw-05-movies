import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
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
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query) {
      serchByName(query).then(movies => {
        setMovies(movies.results);
      });
    }
  }, [query]);
  const onInputChange = value => {
    setSerchParams(value !== '' ? { query: value } : {});
  };
  const onFormSubmit = e => {
    e.preventDefault();
    setSerchParams(value !== '' ? { query: value } : {});
    serchByName(query).then(movies => {
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
          value={value}
          onChange={e => {
            setValue(e.target.value);
            onInputChange(e.target.value);
          }}
        />
        <button type="sublit">Serch</button>
      </form>
      <ul>
        {movies
          ? movies.map(movie => {
              return (
                <NavItem
                  key={movie.id}
                  to={`${movie.id}`}
                  state={{ from: location }}
                >
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
