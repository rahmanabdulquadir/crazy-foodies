import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-around">
  <div className="">
    <a className="btn btn-ghost normal-case text-xl">Crazy Foodies</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <Link to={'home'}>Home</Link>
      <Link to={'categories'}><li><a>Food Category</a></li></Link>
      <Link to={'blog'}><li><a>Blog</a></li></Link>
    </ul>
  </div>
</div>
  );
};

export default Navbar;