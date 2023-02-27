import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";

const PizzaDay = ({ arrMenu, titleMenu }) => {
  const {
    conteinerMenu,
    leftBox,
    card,
    rightBox,
    conteinerRightBox,
    cardTitele,
    cardText,
    cardBtn,
    optionCard,
    imgCard,
    titleCard,
  } = css;

  return (
    <div className={conteinerMenu}>
      <div className={leftBox}>
        {titleMenu.map((el) => {
          return <NavLink key={el}>{el}</NavLink>;
        })}
      </div>
      <div className={rightBox}>
        {titleMenu.map((el) => {
          return (
            <div className={conteinerRightBox} key={el}>
              <h3 className={titleCard}>{el}</h3>

              {arrMenu.map(({ img, name, text, price, mass, size, title }) => {
                return (
                  <ul className={card} key={name}>
                    <li>
                      <img src={img} className={imgCard} alt="" />
                    </li>
                    <li>
                      <h4 className={cardTitele}>{name}</h4>
                    </li>
                    <li>
                      <p className={cardText}>{text}</p>
                    </li>
                    {optionCard && (
                      <li className={optionCard}>
                        <span>{mass}</span>
                        <span>{size}</span>
                        <span>{price}</span>
                      </li>
                    )}

                    <li>
                      <button className={cardBtn}>{price}</button>
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaDay;
