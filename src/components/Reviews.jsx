import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'services/APIwork';
const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getReviews(movieID).then(res => {
      setReviews(res.results);
    });
  }, [movieID]);
  if (!reviews) {
    return;
  }
  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h4>{`Author: ${review.author}`}</h4>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
