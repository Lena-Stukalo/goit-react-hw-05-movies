import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getByID } from 'services/APIwork';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieID);
  useEffect(() => {
    getByID(movieID.slice(1)).then(setMovie);
  }, [movieID]);
  if (!movie) {
    return;
  }
  return (
    <div>
      <button type="button">Go back</button>
      <p>{movie.title}</p>
    </div>
  );
};
export default MovieDetails;
