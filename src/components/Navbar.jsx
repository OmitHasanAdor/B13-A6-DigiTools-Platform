
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({cart}) => {
    return (
      <div className="navbar bg-base-100 shadow-sm sm:px-8 px-0 py-2 sticky top-0 z-10 ">
  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <li><a href="">Products</a></li>
      <li><a href="">Features</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold bg-linear-to-r  from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="">Products</a></li>
      <li><a href="">Features</a></li>
      <li><a href="">Pricing</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">FAQ</a></li>
    </ul>
  </div>

  <div className="navbar-end ">
<div className="tabs tabs-box bg-transparent justify-center items-center">
<span className='flex items-center'>
  <span className=' relative'>
     <CiShoppingCart  /> 
{cart.length>0 &&  <span className=' bg-red-600 text-white text-[10px] h-4 w-4 text-center -right-1.5 rounded-[50%] absolute -top-2'>{cart.length}</span>}
  </span>
  <input type="radio" name="my_tabs_1" className="tab rounded-4xl font-semibold" aria-label="Login" />
</span>
  <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r rounded-4xl text-white font-semibold  from-[#4f39f6] to-[#9514fa]" aria-label="Get Started" defaultChecked />

</div>
  </div>
</div>
    );
};

export default Navbar;