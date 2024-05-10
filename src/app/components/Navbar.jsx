"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#about",
  },
  {
    title: "Game",
    path: "#projects",
  },
  {
    title: "About Us",
    path: "#contact",
  },
  {
    title: "Blog",
    path: "#contact",
  },
  {
    title: "Login",
    path: "#login",
    isButton: true, // Indicate it's a button
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-white text-dark">
      <div className="flex container lg: flex-wrap items-center justify-between mx-auto">
        <span className="text-[#043EA7] text-xl md:text-2xl  font-semibold">
          MGM-MultiMagicGame
        </span>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-dark hover:text-dark hover:border-dark"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-dark hover:text-dark hover:border-dark"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-2  md:flex-row md:space-x-10 mt-0 mb-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isButton ? (
                  <button
                    onClick={() => console.log(`Button "${link.title}" clicked`)}
                    className="btn btn-dark font-weight-600 text-white px-4 py-2"
                    style={{ fontSize: '16px', }}
                  >
                    {link.title}
                  </button>
                ) : (
                  <NavLink href={link.path} title={link.title} className='melink' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
