import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_TOP_FILM } from '../../API/API';
import css from '../Movie/Movie.module.css';

const Home = () => {
  const [arrFilm, setArrFilm] = useState([]);
  JSON.stringify(localStorage.setItem('prevUrl', window.location.href));
  useEffect(() => {
    API_TOP_FILM().then(resp => {
      setArrFilm(resp.data.results);
    });
  }, []);
  // sasdasd
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const { botom_text__card, card, conteiner__card } = css;
  return (
    <ul className={conteiner__card}>
      {arrFilm.map(
        ({
          id,
          original_title,

          release_date,
          vote_average,
          poster_path,
        }) => {
          return (
            <li key={id} className={card}>
              <Link to={`movie/${id}`}>
                <img src={baseImgUrl + poster_path} alt="" />
                <h3>{original_title}</h3>
                <div className={botom_text__card}>
                  <p>Rating: {vote_average}</p>
                  <p>{release_date}</p>
                </div>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Home;
