"use client";
import React, { useEffect, useRef } from "react";
import PlanSliders from "./PlanSliders";
import { motion, useInView, useAnimation } from "framer-motion";
import PlanCard from "./PlanCard";
import { IPlans } from "@/interfaces/IPlans";


export default function Plans() {
  const plansRef = useRef(null);

  const isInViewPlans = useInView(plansRef, { once: true });

  const plansControl = useAnimation();

  useEffect(() => {
    if (isInViewPlans) plansControl.start("visible");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewPlans]);

  const plans: IPlans[] = [
    {
      title: "Basico",
      price: 50,
      services: [
        "1 Página.",
        "Diseño responsivo.",
        "Codigo fuente.",
        "Dominio.",
      ],
    },
    {
      title: "Standard",
      price: 100,
      services: [
        "1 Página.",
        "Diseño responsivo.",
        "Codigo fuente.",
        "Dominio.",
      ],
    },
    {
      title: "Basico",
      price: 200,
      services: [
        "1 Página.",
        "Diseño responsivo.",
        "Codigo fuente.",
        "Dominio.",
      ],
    },
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center md:m-0"
      id="plans"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-black font-bold text-2xl">Planes </h2>
          <div className="w-[60%] h-1 bg-pink-500"></div>
        </motion.div>

        {/* mobile */}
        <PlanSliders plans={plans} />

        {/* desktop */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-11 w-[65%]"
          ref={plansRef}
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
          animate={plansControl}
          transition={{ duration: 1, delay: 1 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
