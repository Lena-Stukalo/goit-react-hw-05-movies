import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrending } from 'services/APIwork';
import styled from 'styled-components';
const NavItem = styled(NavLink)`
  display: block;
  padding: 5px;
  font-size: 14px;
  color: black;
  }
`;

const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    getTrending().then(movies => {
      setTrend(movies.results);
    });
  }, []);
  if (!trend) {
    return;
  }
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trend.map(movie => {
          return (
            <NavItem key={movie.id} to={`movies/:${movie.id}`}>
              {movie.title}
            </NavItem>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
