import { Link, Outlet, useLocation } from "react-router-dom";
import React from "react";
import like from "../assets/images/like.png";
import cart from "../assets/images/cart.png";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import search from "../assets/images/search.png";
import send from "../assets/images/send.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Search } from "@mui/icons-material";


// /** @type {import('tailwindcss').Config} */
// export default {
// 	darkMode: 'selector',
// 	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
// 	theme: {
// 		screens: {
// 			'2xl': { max: '1535px' },
// 			xl: { max: '1279px' },
// 			lg: { max: '1023px' },
// 			md: { max: '767px' },
// 			sm: { max: '639px' },
// 			xs: { max: '400px' },
// 		},
// 		extend: {},
// 	},
// 	plugins: [],
// }

const Layout = () => {



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between lg:px-[50px] py-[30px] px-[100px] ">
        <aside>
          <img className="lg:hidden" src={logo} alt="" />
          <div className="flex items-center gap-[10px]" >
          <div className="hidden lg:block" > <MenuIcon  onClick={handleClick} /> </div>
          <h1 className="hidden lg:block font-bold text-[24px] " >Exclusive</h1>
          </div>
          <div>
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        </aside>
        <ul className="flex items-center gap-[20px] lg:gap-[10px] md:hidden">
          <Link to={"/"} className="font-[500] text-[16.5px] ">
            Home
          </Link>
          <Link to={'/contact'} className="font-[500] text-[16.5px] ">Contact</Link>
          <Link to={'/about'} className="font-[500] text-[16.5px] ">About</Link>
          <Link to={"/login"} className="font-[500] text-[16.5px] ">
            Sign Up
          </Link>
        </ul>
        <div className="flex relative 2xl:left-0 lg:hidden left-[150px] items-center">
          <input
            className="w-[283px] pl-[20px] h-[38px] bg-[#F5F5F5] rounded-[4px]"
            placeholder="What are you looking for?"
            type="search"
          />
          <img className="relative right-[40px]" src={search} alt="" />
        </div>
        <div className="flex items-center gap-[10px]">
          <Link className="lg:hidden" to={'/selected'} > <img src={like} alt="" /> </Link>
          <img src={cart} alt="" />
          <img src={user} alt="" />
        </div>

       <article className="hidden md:mt-[20px] md:text-center w-full md:block" >
       <div className="flex justify-center items-center" >
          <input className="w-[283px] pl-[20px] h-[38px] bg-[#F5F5F5] rounded-[4px]" placeholder="Search" type="search" />
         <div className="relative right-[30px]" > <Search/></div>
        </div>
       </article>

      </nav>

      <Outlet />
      <footer className="bg-[black] flex flex-wrap justify-center px-[20px] gap-[110px] md:gap-[50px] items-center text-[white] ">
        <article className="py-[50px]" >
          <ul className="leading-[40px]" >
            <li className="text-[24px] font-[700]" >Exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
          <div className="flex mt-[10px] items-center relative">
            <input
              className=" w-[217px] h-[48px] pl-[15px] bg-transparent border-[2px] border-gray-400"
              type="search"
              placeholder="Enter your email"
            />
            <img className="relative right-[40px]" src={send} alt="" />
          </div>
        </article>

        <ul className="leading-[40px]" >
          <li className="text-[20px] font-[500]">Support</li>
          <li>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>

        <ul className="leading-[40px]" >
          <li className="text-[20px] font-[500]" >Account</li>
          <li>My Account</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>

        <ul className="leading-[40px]" >
          <li className="text-[20px] font-[600]" >Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <div className="relative bottom-[70px]" >
          <h1 className="text-[20px] font-[600] mb-[20px]" >Social</h1>
          <div className="flex items-center gap-[20px] " >
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
