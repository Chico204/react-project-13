import React from 'react';

import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
 
  return (
    <nav className='nav' >
    nav
    </nav>
  );
};

export default Navbar;