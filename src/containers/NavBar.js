import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/search'><li>Search</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
