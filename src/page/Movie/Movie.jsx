import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API_SEARCH_FILM } from '../../API/API';
import css from './Movie.module.css';
const Movie = () => {
  const [arrFilm, setArrFilm] = useState([]);
  const [filterValue, setFiltrValue] = useState('');
  const [filmName, setFilmName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('q');
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { q } = params;

  useEffect(() => {
    JSON.stringify(localStorage.setItem('prevUrl', window.location.href));
    if (q === '' && filmName === '') {
      setArrFilm([]);
    }
    if (filmName !== '' && !q) {
      API_SEARCH_FILM(filmName).then(resp => {
        setArrFilm(resp.data.results);
      });
    }
    if (q) {
      API_SEARCH_FILM(q).then(resp => {
        setArrFilm(resp.data.results);
      });
    }
  }, [filmName, q]);

  const changeValue = event => {
    setFiltrValue(event.target.value);
  };
  const formSubit = event => {
    event.preventDefault();
    setFilmName(filterValue);
    setSearchParams({ q: filterValue });
  };
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const { botom_text__card, card, conteiner__card } = css;
  return (
    <>
      <form action="" onSubmit={formSubit}>
        <input value={filterValue} type="text" onChange={changeValue} />
        <button>Search</button>
      </form>
      <ul className={conteiner__card}>
        {arrFilm.map(films => {
          const {
            id,
            original_title,

            release_date,
            vote_average,
            poster_path,
          } = films;
          return (
            <li key={id} className={card}>
              <Link to={`${id}`}>
                <img src={baseImgUrl + poster_path} alt="" />
                <h3>{original_title}</h3>
                <div className={botom_text__card}>
                  <p>Rating: {vote_average}</p>
                  <p>{release_date}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movie;
