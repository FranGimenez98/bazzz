"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function AboutAndServices() {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center relative"
      id="about"
    >
      <div className="flex gap-20 w-full items-center justify-center z-10">
        <motion.div
          className="flex flex-col w-[90%] md:w-[50%] justify-center items-center md:items-end m-0 md:mb-28"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-end md:items-end mb-2 z-10">
            <h2 className="text-black font-bold text-2xl">
              Sobre <span className="text-pink-600">Nosotros</span> 💻
            </h2>
            <div className="w-[45%] h-1 bg-pink-500 align-self-end"></div>
          </div>
          <div className="w-full md:w-[80%] z-10">
            <p className="text-black text-center md:text-end">
              En{" "}
              <span className="font-bold text-lg">
                Bazzz<span className="text-pink-600">.</span>
              </span>{" "}
              somos un equipo apasionado de desarrolladores web especializados
              en la creación de extraordinarios Ecommerce. Lo que nos hace
              diferentes es que nos tomamos el tiempo para conocerte y entender
              tus metas y sueños. Nos apasiona ayudarte a alcanzar el éxito en
              línea y estamos listos para brindarte soluciones personalizadas y
              de{" "}
              {/* somos apasionados desarrolladores web freelance con experiencia en
              la creación de sitios web excepcionales. Ofrecemos soluciones
              personalizadas y de{" "} */}
              <span className="text-pink-500 font-semibold">alta calidad</span>,
              <br />
              centradas en ti y tus metas.
              <br />
              ¡Juntos, crearemos el sitio web perfecto para tu
              {/* ,centradas en ti y tus metas. Confía en nosotros para llevar tu
              presencia en línea a nuevas alturas y marcar la diferencia en el
              mundo digital. ¡Juntos, crearemos el sitio web perfecto para tu */}
              <span className="text-pink-500 font-semibold"> éxito!</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex flex-col w-[50%] justify-center items-start"
          id="service"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col mb-2 z-10 mt-16">
            <h2 className="text-black font-bold text-2xl text-end">
              <span className="text-pink-600">S</span>ervicios 📱
            </h2>
            <div className="w-[35%] h-1 bg-pink-500"></div>
          </div>
          <div className="w-full md:w-[80%] z-10">
            <p className="text-black text-start">
              Desarrollamos el Ecommerce ideal para tu{" "}
              <span className="text-pink-500 font-semibold">negocio</span>.
              Adaptamos tu diseño existente o creamos uno propio que se adapte
              perfectamente a tus necesidades y objetivos. 
              <br />
              Confía en nosotros
              para crear un sitio web impresionante que{" "}
              <span className="text-pink-500 font-semibold">destaque</span> en
              línea.
              <br />
              Desde smartphones hasta tablets, tu página web se adaptará
              perfectamente para brindar una{" "}
              <span className="text-pink-500 font-semibold">
                experiencia
              </span>{" "}
              de usuario excepcional.
              <br />
              Con nuestro servicio obtendrás un dominio que te hará destacar
              entre la multitud y te impulsará hacia el éxito en la web.
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
          </div>
        </motion.div>
      </div>

      {/* mobile */}
      <div className="md:hidden w-[19rem] h-[19rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl  rounded-full absolute -left-36 top-52" />
      <div className="md:hidden w-[10rem] h-[10rem] bg-gradient-to-br from-purple-200  to-pink-400 blur-3xl  rounded-full absolute -left-16 z-[6] top-52" />

      <div className="md:hidden w-[10rem] h-[10rem] bg-gradient-to-br from-purple-200  to-pink-400 blur-3xl   rounded-full absolute -right-14 -bottom-24 z-[6]" />
      <div className="md:hidden w-[15rem] h-[15rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl   rounded-full absolute -right-14 -bottom-32 z-[5]" />
      <div className="md:hidden w-[20rem] h-[20rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl   rounded-full absolute -right-32 -bottom-80 z-[5]" />

      {/* desktop */}
      <div className="hidden md:block w-[19rem] h-[19rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl  rounded-full absolute -left-24" />
      <div className="hidden md:block w-[10rem] h-[10rem] bg-gradient-to-br from-purple-200  to-pink-600 blur-3xl   rounded-full absolute left-10 z-[6]" />
      <div className="hidden md:block w-[5rem] h-[5rem] bg-gradient-to-br from-purple-200  to-pink-600 blur-3xl   rounded-full absolute left-10 -bottom-6 z-[6]" />
      <div className="hidden md:block w-[15rem] h-[15rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl   rounded-full absolute left-1 bottom-1 z-[5]" />
      <div className="hidden md:block w-[25rem] h-[25rem] bg-gradient-to-br from-purple-200  to-pink-100 blur-3xl   rounded-full absolute left-1 -bottom-52 z-[5]" />
    </section>
  );
}
