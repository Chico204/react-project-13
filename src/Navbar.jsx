import React from 'react';

import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e)=> {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right)/ 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, {center, bottom})
  }
  const handleSubmenu = (e)=> {
  if (!e.target.classList.contains('link-btn')){
    closeSubmenu()
  }

  }
  return (
    <nav className='nav flex items-center justify-center bg-transparent relative z-[1]' onMouseOver={handleSubmenu} >
    <div className="nav-center w-[90vw] md:grid md:grid-cols-[auto_1fr_auto] md:items-center">
      <div className="nav-header flex justify-between items-center">
        <h1>Stripe</h1>
        <button className='btn toggle-btn md:hidden' onClick={openSidebar}>
          <FaBars/>
        </button>
      </div>
      <ul className="nav-links hidden md:grid md:grid-cols-3 md:text-center md:h-full md:items-center md:justify-self-center ">
        <li className='h-full'>
          <button className="link-btn h-full bg-transparent border-transparent text-[1.1rem] text-black capitalize tracking-wide w-40" onMouseOver={displaySubmenu}>
            products
          </button>
           </li>
            <li className='h-full'>
          <button className="link-btn h-full bg-transparent border-transparent text-[1.1rem] text-black capitalize tracking-wide w-40" onMouseOver={displaySubmenu}>
           developers
          </button>
           </li>
            <li className='h-full'>
          <button className="link-btn h-full bg-transparent border-transparent text-[1.1rem] text-black capitalize tracking-wide w-40" onMouseOver={displaySubmenu}>
       company
          </button>
           </li>
      </ul>
      <button className='btn signin-btn bg-white text-xl hidden md:inline-block '>sign in</button>
    </div>
    </nav>
  );
};

export default Navbar;