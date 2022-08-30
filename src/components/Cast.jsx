import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'services/APIwork';
const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getCast(movieID).then(res => {
      setCast(res.cast);
    });
  }, [movieID]);
  if (!cast) {
    return;
  }
  return (
    <ul>
      {cast.map(act => {
        return (
          <li key={act.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${
                act.profile_path ? act.profile_path : ''
              }`}
              alt=""
              width={300}
            />
            <p>{act.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
