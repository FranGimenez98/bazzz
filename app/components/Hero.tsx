"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link as LinkS } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="flex w-full h-full min-h-screen items-center justify-center relative "
      id="home"
    >
      <div className="flex flex-col items-center justify-center w-full md:w-[50%] h-full pb-11">
        <div className="w-[90%] md:w-[70%] flex flex-col items-center">
          <div className="relative z-10 mb-2">
            <motion.h2
              className="text-8xl text-black font-bold z-10 mt-11 select-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Bazzz<span className="text-pink-500 text-6xl">.</span>
              <motion.p
                className="absolute text-sm top-[125px] left-[250px] m-0 font-extrabold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                TECH
              </motion.p>
              {/* <span className="absolute text-sm top-[125px] left-[250px] m-0">TECH</span> */}
            </motion.h2>
          </div>
          <motion.p
            className="text-xl md:text-2xl font-bold p-0 m-0 text-slate-800 mb-5 z-10 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            La <span className="border-b-4 border-pink-500 ">clave</span> para
            tu <span className="text-pink-500">éxito</span> en linea
          </motion.p>

          <div className="flex flex-col items-center justify-center z-10">
            <motion.p
              className="text-slate-600 text-sm font-medium text-center select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Elevamos tu presencia web al máximo. Experiencias únicas que
              cautivan. Tu visión, nuestra pasión. Juntos, convertimos ideas en
              realidad. ¡Descubre un nuevo nivel digital con nosotros!
            </motion.p>
          </div>
          <motion.div
            className="flex gap-2 mt-3 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <LinkS to="about" smooth={true}>
              <button className=" bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 text-white   p-[2px] rounded-xl px-5 py-2">
                Descubre más
              </button>
            </LinkS>

            <LinkS to="contact" smooth={true}>
              <button className=" bg-gradient-to-br from-gray-700  to-black p-[2px] text-white rounded-xl px-5 py-2">
                ¡Hazlo realidad!
              </button>
            </LinkS>
          </motion.div>
        </div>
      </div>

      {/* mobile */}
      <div className="h-[15rem] w-[15rem] lg:hidden rounded-full bg-gradient-to-br from-pink-200  to-pink-200 blur-3xl -top-1 left-1 absolute md:flex items-center justify-center" />
      <div className="h-[5rem] w-[5rem] lg:hidden rounded-full bg-gradient-to-br from-purple-200  to-pink-200 blur-3xl top-2 left-1 absolute md:flex items-center justify-center" />
      <div className="h-[14rem] w-[14rem] lg:hidden rounded-full bg-gradient-to-br from-purple-200  to-pink-200 blur-3xl top-10 -left-10 absolute md:flex items-center justify-center" />
      <div className="h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-600 blur-2xl -top-12 -left-10 absolute md:hidden items-center justify-center" />

      <div className="md:hidden h-[15rem] w-[15rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl bottom-1 -right-16 absolute items-center justify-center" />
      <div className="h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-100  bottom-40 -right-24 blur-2xl absolute md:hidden items-center justify-center" />
      <div className="md:hidden h-[15rem] w-[15rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-300 blur-3xl -bottom-3 -right-10 absolute items-center justify-center" />
      <div className="md:hidden h-[10rem] w-[10rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-600 blur-2xl bottom-10 -right-20 absolute items-center justify-center" />

      {/* desktop */}
      <div className="hidden lg:h-[25rem] lg:w-[25rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-200 blur-3xl -top-12 left-60 absolute md:flex items-center justify-center" />
      <div className="hidden lg:h-[20rem] lg:w-[20rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-200 blur-3xl top-20 left-36 absolute md:flex items-center justify-center" />

      <div className="hidden lg:h-[10rem] lg:w-[10rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-600 blur-2xl top-10 left-80 absolute md:flex items-center justify-center" />

      <div className="hidden lg:h-[10rem] lg:w-[10rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-300 blur-3xl top-16 left-96 absolute md:flex items-center justify-center" />

      <div className="hidden lg:h-[20rem] lg:w-[20rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl -bottom-20 -right-16 absolute md:flex items-center justify-center" />
      <div className="hidden lg:h-[20rem] lg:w-[20rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl top-40 -right-56 absolute md:flex items-center justify-center" />
      <div className="hidden lg:h-[20rem] lg:w-[20rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-600 blur-3xl -bottom-48 -right-56 absolute md:flex items-center justify-center" />
      <div className="hidden lg:h-[20rem] lg:w-[20rem] rounded-full bg-gradient-to-br from-purple-200  to-pink-300 blur-3xl -bottom-32 -right-10 absolute md:flex items-center justify-center" />
    </section>
  );
};

export default Hero;
