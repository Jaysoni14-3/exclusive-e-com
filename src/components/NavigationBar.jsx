import { useState } from "react";

import searchIcon from "../assets/search-icon.png";
import heartIcon from "../assets/heart-icon.png";
import cartIcon from "../assets/cart-icon.png";

import menuOpenIcon from "../assets/menu.png";
import menuCloseIcon from "../assets/close.png";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="navbar max-container flex items-center justify-between gap-2 mt-10 mb-4">
        <a href="/" className="logo cursor-pointer">
          <h2 className="text-24px font-bold text-black">Exclusive</h2>
        </a>

        <nav className=" hidden tablet:flex gap-12">
          <a className="text-black font-poppins text-16px" href="/">
            Home
          </a>
          <a className="text-black font-poppins text-16px" href="/about">
            About
          </a>
          <a className="text-black font-poppins text-16px" href="/contact">
            Contact
          </a>
        </nav>

        <div className="right-nav hidden tablet:flex  gap-6 items-center">
          <div className="searchBar w-full overflow-hidden border relative rounded">
            <input
              className="bg-secondary w-full pl-[20px] pr-[12px] py-2"
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <figure className="absolute bg-secondary cursor-pointer right-[12px] top-2 w-6 h-6">
              <img src={searchIcon} alt="search icon" />
            </figure>
          </div>
          <div className="icons-container flex gap-4">
            <figure className="w-8 h-8 cursor-pointer">
              <img className="p-1" src={heartIcon} alt="" />
            </figure>
            <figure className="w-8 h-8 cursor-pointer">
              <a href="/cart">
                <img className="p-1" src={cartIcon} alt="" />
              </a>
            </figure>
          </div>
        </div>

        <div className="movile-nav-icons tablet:hidden">
          <figure onClick={toggleDrawer} className="menu-open">
            <img className="w-8" src={menuOpenIcon} alt="open moboile menu" />
          </figure>
        </div>
      </header>

      {/* Mobile nav */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ maxWidth: "100%" }}
        className="flex flex-col py-6 px-2"
      >
        <figure className="close-nav ms-auto" onClick={toggleDrawer}>
          <img className="w-8" src={menuCloseIcon} alt="open moboile menu" />
        </figure>
        <nav className="mobile-nav w-full flex flex-col justify-center items-center gap-10">
          <a className="text-black font-poppins text-16px" href="/">
            Home
          </a>
          <a className="text-black font-poppins text-16px" href="/about">
            About
          </a>
          <a className="text-black font-poppins text-16px" href="/contact">
            Contact
          </a>
        </nav>
        <div className="right-nav gap-6 items-center mt-10">
          <div className="searchBar w-full overflow-hidden border relative rounded">
            <input
              className="bg-secondary w-full pl-[20px] pr-[12px] py-2"
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <figure className="absolute bg-secondary cursor-pointer right-[12px] top-2 w-6 h-6">
              <img src={searchIcon} alt="search icon" />
            </figure>
          </div>
          <div className="icons-container flex justify-center items-center gap-4 mt-10">
            <figure className="w-8 h-8 cursor-pointer">
              <img className="p-1" src={heartIcon} alt="" />
            </figure>
            <figure className="w-8 h-8 cursor-pointer">
              <a href="/cart">
                <img className="p-1" src={cartIcon} alt="" />
              </a>
            </figure>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavigationBar;
