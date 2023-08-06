"use client";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Services() {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center md:hidden"
      id="serviciosmobile"
    >
      <motion.div
        className="flex flex-col mb-2 z-10 mt-16"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-black font-bold text-2xl text-end">
          <span className="text-pink-600">S</span>ervicios 📱
        </h2>
        <div className="w-[35%] h-1 bg-pink-500"></div>
      </motion.div>
      <motion.div
        className="w-[80%] md:w-[80%] z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-black text-center md:text-start">
          Desarrollamos el Ecommerce ideal para tu{" "}
          <span className="text-pink-500 font-semibold">negocio</span>.
          Adaptamos tu diseño existente o creamos uno propio que se adapte
          perfectamente a tus necesidades y objetivos.
          <br />
          Confía en nosotros para crear un sitio web impresionante que{" "}
          <span className="text-pink-500 font-semibold">destaque</span> en
          línea.
          <br />
          Desde smartphones hasta tablets, tu página web se adaptará
          perfectamente para brindar una{" "}
          <span className="text-pink-500 font-semibold">experiencia</span> de
          usuario excepcional.
          <br />
          Con nuestro servicio obtendrás un dominio que te hará destacar entre
          la multitud y te impulsará hacia el éxito en la web.
          {/* Ofrecemos servicios{" "}
              <span className="text-pink-500 font-semibold">
                desarrollo web
              </span>{" "}
              personalizados. Adaptamos tu diseño existente o creamos uno propio
              que se adapte perfectamente a tus necesidades y objetivos. Confía
              en nosotros para crear un sitio web impresionante que{" "}
              <span className="text-pink-500 font-semibold">destaque</span> en
              línea
              <span className="text-pink-500 font-bold">.</span> */}
        </p>
      </motion.div>
    </section>
  );
}
