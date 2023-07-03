"use client";

import React, { useState, useRef } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOuside";
import useScrollColor from "../../hooks/useScrollChange";
import { Link as LinkS } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scroll = useScrollColor(500);

  useClickOutside(wrapperRef, () => {
    setIsOpen(false);
  });

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed bottom-0 md:top-0 w-full min-h-[4rem] md:h-[3.5rem] md:min-h-[3.5rem] bg-pink-400  backdrop-filter backdrop-blur-sm bg-opacity-10  bg-clip-padding md:bg-transparent  flex flex-col justify-between items-center px-5 py-5 md:py-0 md:px-14 z-50 transition ${
        scroll
          ? " backdrop-filter backdrop-blur-sm bg-opacity-10  bg-clip-padding md:shadow-sm"
          : ""
      } ${isOpen ? "rounded-t-2xl" : "rounded-none"}`}
    >
      <div
        ref={wrapperRef}
        // className={`${
        //   isOpen ? "right-0" : "-right-96"
        // } h-screen w-[90%] fixed top-0 bg-white shadow-2xl transition md:hidden`}
        className={` relative md:hidden w-full transition ${
          isOpen ? "block md:hidden" : "hidden md:hidden"
        }`}
      >
        <div className="flex flex-col items-center h-full py-1 md:hidden">
          <LinkS
            to="about"
            smooth={true}
            className="text-lg font-semibold text-black"
          >
            Nosotros
          </LinkS>
          <LinkS
            to="serviciosmobile"
            smooth={true}
            className="text-lg font-semibold text-black"
          >
            Servicios
          </LinkS>
          <LinkS
            to="works"
            smooth={true}
            className="text-lg font-semibold text-black"
          >
            Trabajos
          </LinkS>
          <LinkS
            to="contact"
            smooth={true}
            className="text-lg font-semibold text-black"
          >
            Contacto
          </LinkS>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:h-full">
        <h1 className="font-bold text-2xl text-black cursor-pointer select-none">
          <LinkS to="home" smooth={true}>
            Bazzz<span className="text-pink-600 text-2xl">.</span>
          </LinkS>
        </h1>
        {isOpen ? (
          <button className="text-2xl md:hidden" onClick={handleIsOpen}>
            <IoIosArrowDown />{" "}
          </button>
        ) : (
          <button>
            <IoIosArrowUp
              className="text-2xl md:hidden"
              onClick={handleIsOpen}
            />
          </button>
        )}
        {/* <button className="md:hidden" onClick={handleIsOpen}>
          <FaBars className="text-xl" />
        </button> */}
        <div className="hidden md:flex gap-10">
          <LinkS
            to="about"
            smooth={true}
            className="text-lg font-medium text-black cursor-pointer"
          >
            Nosotros
          </LinkS>
          <LinkS
            to="about"
            smooth={true}
            className="text-lg font-medium text-black cursor-pointer"
          >
            Servicios
          </LinkS>
          <LinkS
            to="works"
            smooth={true}
            className="text-lg font-medium text-black cursor-pointer"
          >
            Trabajos
          </LinkS>
          <LinkS
            to="contact"
            smooth={true}
            className="text-lg font-medium text-black cursor-pointer"
          >
            Contacto
          </LinkS>
        </div>
      </div>
    </div>
  );
}
