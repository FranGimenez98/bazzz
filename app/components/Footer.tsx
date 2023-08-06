"use client";

import React from "react";
import { GiClothes } from "react-icons/gi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { Link as LinkS } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" min-h-[270px]  md:h-[275px] border-t-[1px] border-b-slate-200 mt-[5rem] flex flex-col justify-center items-center py-4">
      <div className="w-full md:w-[80%] h-[100%]">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center mb-4">
          <div className="hidden md:flex flex-col">
            <div className="flex flex-col text-black gap-1">
              <h4 className="text-lg font-medium">Contact</h4>
              <div className="flex items-center">
                <MdLocationOn className="mr-1" />
                <span className="text-sm">Buenos Aires. Argentina</span>
              </div>
              <div className="flex items-center">
                <ImPhone className="mr-1" />
                <span className="text-sm">+54 11 1111-1111</span>
              </div>
              <div className="flex items-center">
                <GrMail className="mr-1" />
                <span className="text-sm">bazzztech@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-center md:text-start">
            <h4 className="hidden md:block text-lg font-medium">
              Bazzz<span className="text-pink-500">.</span>
            </h4>
            <LinkS to="about" smooth={true} className="text-lg md:text-sm ">
              Nosotros
            </LinkS>
            <LinkS to="serviciosmobile" smooth={true} className="text-lg md:text-sm ">
              Servicios
            </LinkS>
            <LinkS to="works" smooth={true} className="text-lg md:text-sm ">
              Trabajos
            </LinkS>
            <LinkS to="contact" smooth={true} className="text-lg md:text-sm ">
              Contacto
            </LinkS>
          </div>

          <div className="flex flex-col w-[23%]">
            <h4 className="hidden md:block text-lg font-medium">Redes</h4>
            <p className="hidden md:block text-sm">
              Síganos en las redes sociales para conocer las últimas
              actualizaciones.
            </p>
            <div className="flex gap-5 items-center mt-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-2xl md:text-xl text-gray-800"
              >
                <BsInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="text-2xl md:text-xl text-gray-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-2xl md:text-xl text-gray-800"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 w-[80%]"></div>
      <div className="flex flex-row justify-center m-auto mt-[10px]">
        <h1 className="font-bold text-2xl text-black cursor-pointer select-none">
          Bazzz<span className="text-pink-600 text-2xl">.</span>
        </h1>
      </div>
      <div className="m-auto text-center mt-2">
        <span className="text-black text-[12px]">
          Copyright © <span id="actual-year"></span>. Developed by Bazzz
        </span>
      </div>
    </footer>
  );
};

export default Footer;
