import { useParams, useNavigate } from 'react-router-dom';
import movieData from '../data';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieData.find((m) => m.id === parseInt(id));

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} width="300" />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;

