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

const Layout = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <nav className="flex items-center justify-between py-[30px] px-[100px] ">
        <aside>
          <img src={logo} alt="" />
        </aside>
        <ul className="flex items-center gap-[20px]">
          <Link to={"/"} className="font-[500] text-[16.5px] ">
            Home
          </Link>
          <Link to={'/contact'} className="font-[500] text-[16.5px] ">Contact</Link>
          <Link to={'/about'} className="font-[500] text-[16.5px] ">About</Link>
          <Link to={"/login"} className="font-[500] text-[16.5px] ">
            Sign Up
          </Link>
        </ul>
        <div className="flex relative left-[150px] items-center">
          <input
            className="w-[283px] pl-[20px] h-[38px] bg-[#F5F5F5] rounded-[4px]"
            placeholder="What are you looking for?"
            type="search"
          />
          <img className="relative right-[40px]" src={search} alt="" />
        </div>
        <div className="flex items-center gap-[10px]">
          <Link to={'/selected'} > <img src={like} alt="" /> </Link>
          <img src={cart} alt="" />
          <img src={user} alt="" />
        </div>
      </nav>
      <Outlet />
      <footer className="bg-[black] flex justify-evenly  items-center text-[white] ">
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
