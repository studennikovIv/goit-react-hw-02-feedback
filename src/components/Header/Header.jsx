import React from "react";
import css from "./Header.module.css";

import logo from "./1.png";
import addSale from "./addSale.png";
const Header = () => {
  const {
    logoImg,
    header,
    headerList__link,
    headerList__ul,
    addSale__btn,
    headerList__li,
    header__container,
    logoImg__link,
  } = css;
  return (
    <header className={header}>
      <div className={header__container}>
        <a href="/" className={logoImg__link}>
          <img src={logo} alt="asdasd" className={logoImg} />
        </a>

        <ul className={headerList__ul}>
          <li className={headerList__li}>
            <a href="tel:+380632431675" className={headerList__link}>
              {" "}
              +380 63 243 16 75{" "}
            </a>
            <p>з 09:00 до 21:00 без вихідних</p>
          </li>
          <li>
            <button className={addSale__btn}>
              <img src={addSale} alt="1" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
