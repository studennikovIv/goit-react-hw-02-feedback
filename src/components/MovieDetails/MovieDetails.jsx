import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

import { API_GET_FILM_BY_ID } from '../../API/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState('');
  const [error, setError] = useState(false);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    API_GET_FILM_BY_ID(movieId).then(resp => {
      setFilm(resp.data);
      setGenres(resp.data.genres);
    });
  }, []);

  const { title, vote_average, overview, poster_path } = film;

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const clickGoBack = () => {
    window.history.pushState({}, '', localStorage.getItem('prevUrl'));
    window.location = window.location.href;
  };
  const { conteinerMovie, aboutFilm, genresList, genresLi } = css;
  return (
    <>
      <button onClick={clickGoBack}>
        <Link>Go Back</Link>
      </button>

      <div className={conteinerMovie}>
        <img src={`${baseImgUrl}${poster_path}`} alt="" />
        <div className={aboutFilm}>
          <h2>{title}</h2>
          <p>User Score: {vote_average}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={genresList}>
            {genres.map(({ id, name }) => {
              return (
                <li className={genresLi} key={id}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="conteinerMoreInfo">
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast '}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
