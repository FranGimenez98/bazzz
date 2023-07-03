"use client";

import {useEffect, useRef} from 'react'
import { IPlans } from "@/interfaces/IPlans";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion, useInView,useAnimation  } from "framer-motion";

interface Props {
  plans: IPlans[];
}



export default function PlanSliders({ plans }: Props) {
  const plansRef = useRef(null);

  const isInViewPlans = useInView(plansRef, { once: true });

  const plansControl = useAnimation();

  useEffect(() => {
    if (isInViewPlans) plansControl.start("visible");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewPlans]);
  return (
    <motion.div
      className="w-[95%] md:hidden"
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
      <Splide
        options={{
          arrows: false,
          pagination: false,
          drag: "free",
          rewind: true,
          interval: 4000,
          breakpoints: {
            640: { fixedWidth: "16rem", gap: "1.2rem" },
          },
        }}
      >
        {plans.map((plan, index) => (
          <SplideSlide key={index}>
            <motion.div
              className="bg-gradient-to-tr from-purple-300 via-purple-500 to-pink-500  p-1 rounded-xl w-full h-[30rem] shadow-xl"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <div className="text-black bg-gradient-to-tl from-purple-200 via-white to-pink-50 rounded-xl h-full w-full flex flex-col items-center py-5 justify-between">
                <div className="flex flex-col items-center justify-center mb-4 ">
                  <div className="mb-5 flex-col">
                    <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
                    <h2 className="font-bold text-pink-500 text-3xl">
                      ${plan.price}
                    </h2>
                  </div>
                  {plan.services.map((service, index) => (
                    <div
                      className="flex  items-center w-full gap-1"
                      key={index}
                    >
                      <span className="text-4xl text-pink-500">•</span>
                      <p>{service}</p>
                    </div>
                  ))}

                  <div className="flex  items-center w-full gap-1">
                    <span className="text-4xl text-pink-500">•</span>
                    <p>Diseño responsive.</p>
                  </div>
                  <div className="flex  items-center w-full gap-1">
                    <span className="text-4xl text-pink-500">•</span>
                    <p>Codigo fuente.</p>
                  </div>
                  <div className="flex  items-center w-full gap-1">
                    <span className="text-4xl text-pink-500">•</span>
                    <p>Dominio.</p>
                  </div>
                </div>

                <div className="w-[70%]">
                  <button className="w-full bg-gradient-to-br from-purple-300 via-purple-500 to-pink-500  text-white py-2 rounded-lg shadow-md">
                    Contratar
                  </button>
                </div>
              </div>
            </motion.div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
