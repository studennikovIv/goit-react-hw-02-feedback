import React from "react";
import css from "./Home.module.css";
import myClients from "components/myClients/myClients";
import { Link } from "react-router-dom";
const Home = () => {
  const { card, conteinerCard } = css;
  return (
    <>
      <div className={conteinerCard}>
        {myClients.map(({ name, id, logoImg }) => {
          return (
            <Link to={`${name}`} key={id}>
              <div className={card}>
                <img src={logoImg} alt={name} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
