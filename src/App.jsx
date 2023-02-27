import React from 'react';
import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
// KFC
import menuKFC from './components/KFC/KFC.jsx';
import titleMenuPizzaKFC from './components/KFC/titleMenuKFC.jsx';
// Pizza Day;
import menuPizza from './components/PizzaDay/pizzaDay';
import titleMenuPizzaDay from './components/PizzaDay/titleMenuPizzaDay';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/dostavka" element={<Home />} />
          <Route
            path="/dostavka/KFC"
            element={<Menu arrMenu={menuKFC} titleMenu={titleMenuPizzaKFC} />}
          />
          <Route
            path="/dostavka/PizzaDay"
            element={<Menu arrMenu={menuPizza} titleMenu={titleMenuPizzaDay} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
