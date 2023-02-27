import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  const { header, navLink, conteiner } = css;
  return (
    <>
      <div className={conteiner}>
        <header className={header}>
          <nav>
            <NavLink className={navLink} to="/">
              Home
            </NavLink>
            <NavLink className={navLink} to="/movie">
              Movie
            </NavLink>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
