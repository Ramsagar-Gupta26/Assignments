import { Link } from 'react-router-dom';
import movieData from '../data';

function MovieList() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {movieData.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textAlign: 'center' }}>
          <img src={movie.image} alt={movie.title} width="100%" />
          <h4>{movie.title}</h4>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;

