/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { IWorks } from "@/interfaces/IWorks";
import Link from "next/link";

const works: IWorks[] = [
  {
    name: "Bazzz ecommerce 👕",
    image: "https://i.gyazo.com/2eeb22cffad8ee9ad9306d4739a1f8ee.png",
    link: "https://test-ecommerce-sandy.vercel.app/",
  },
  {
    name: "Coming soon...",
    image: "",
    link: "",
  },
  {
    name: "Coming soon...",
    image: "",
    link: "",
  },
];

export default function Works() {
  const worksRef = useRef(null);

  const isInViewWorks = useInView(worksRef, { once: true });
  const worksControl = useAnimation();

  useEffect(() => {
    if (isInViewWorks) worksControl.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewWorks]);

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center relative py-20 md:p-0"
      id="works"
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-black font-bold text-2xl z-10">
          🚀 Nuestros <span className="text-pink-600">Trabajos</span>
        </h2>
        <div className="w-[30%] h-1 bg-pink-500" />
      </motion.div>

      <div className="flex flex-col justify-center items-center w-full ">
        <motion.div
          className="w-[90%] text-center md:w-[45%] z-10 mb-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-black ">
            En Bazz, estamos listos para llevar tu presencia en la web al
            siguiente nivel y crear un sitio web impactante que refleje la
            esencia de tu negocio.{" "}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[85%] mt-5 z-10"
          ref={worksRef}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1, // Adjust the stagger delay as needed
              },
            },
          }}
          initial="hidden"
          animate={worksControl}
          transition={{ duration: 1, delay: 1 }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -23 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <div className="w-full h-[11rem] md:h-[14rem] bg-black flex items-center justify-center relative">
                {work.image.length > 0 ? (
                  <img
                    src={work.image}
                    className="h-full w-full object-cover bg-center"
                    alt={`${work.image} image`}
                  />
                ) : (
                  <div></div>
                )}
                <div className="absolute bottom-0 bg-black backdrop-filter backdrop-blur-sm bg-opacity-40 h-10 w-full z-10 flex items-center px-4">
                  <Link href={work.link} target="_blank" className="font-semibold text-white">
                    {work.name}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
