import { IPlans } from "@/interfaces/IPlans";
import React from "react";

interface Props {
  plan: IPlans;
}

export default function PlanCard({ plan }: Props) {
  return (
    <div className="bg-gradient-to-bl from-pink-300 via-pink-500 to-pink-700  p-1 rounded-xl w-full h-[25rem] shadow-xl">
      <div className="text-black bg-gradient-to-tl from-purple-200 via-white to-pink-50  rounded-xl h-full w-full flex flex-col items-center py-5 justify-between">
        <div className="flex flex-col items-center justify-center mb-4 ">
          <div className="mb-5 flex-col">
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <h2 className="font-bold text-pink-500 text-3xl">${plan.price}</h2>
          </div>

          {plan.services.map((service, index) => (
            <div className="flex  items-center w-full gap-1" key={index}>
              <span className="text-4xl text-pink-500">•</span>
              <p>{service}</p>
            </div>
          ))}
        </div>

        <div className="w-[70%]">
          <button className="w-full bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700  text-white py-2 rounded-lg shadow-md">
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
}
