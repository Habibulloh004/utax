import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { img } from '../png';

const Header = () => {
  const location = useLocation();
  const { logo } = img;
  return (
    <nav className="flex justify-between items-center mt-6">
      <Link to="/">
        <img className="w-24 cursor-pointer" src={logo} alt="" />
      </Link>
      <article className="flex flex-col justify-center text-right">
        {location.pathname === '/about' && (
          <Link className="text-sm font-medium text-primary cursor-pointer" to="/">
            Бош сахифа
          </Link>
        )}
        <Link className="text-sm font-bold text-primary cursor-pointer" to="/about">
          Биз хақимизда
        </Link>
      </article>
    </nav>
  );
};

export default Header;
