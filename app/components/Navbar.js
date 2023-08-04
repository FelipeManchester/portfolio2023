"use client";
import React from "react";
import clsx from "clsx";
import logo from "/public/icons/Felipe..svg";
import { Link } from "react-scroll";

import { Fira_Sans } from "next/font/google";
const text = Fira_Sans({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "flex flex-col gap-10 md:flex-row justify-between items-center py-5 md:py-10 md:px-5 max-w-7xl mx-auto my-0",
        text.className
      )}
    >
      <a href="#">
        <img src={logo.src} alt="My Image" />
      </a>
      <ul className="flex flex-wrap gap-3 text-sm md:text-lg">
        <li>
          <Link
            to="projetos"
            smooth={true}
            duration={500}
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg cursor-pointer"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="formacao"
            smooth={true}
            duration={500}
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg cursor-pointer"
          >
            Formação
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="py-2.5 px-2.5 block bg-gray-50 rounded-md md:bg-inherit text-lg cursor-pointer "
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
