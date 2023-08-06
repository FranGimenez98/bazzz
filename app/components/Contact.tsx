"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/api";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

interface ContactData {
  subject: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const schema: ZodType<ContactData> = z.object({
    subject: z
      .string()
      .min(1, { message: "Name is required" })
      .max(15, { message: "Name must contain at most 15 character(s)" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: ContactData) => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
        await sendEmail(data.email, data.subject, data.message);
        reset();
        setIsLoading(false);
        toast.success("Email enviado correctamente.");
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      className="flex flex-col w-full h-full min-h-screen items-center justify-center relative"
      id="contact"
    >
      <motion.div
        className="mb-5 flex flex-col w-[70%] items-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-black font-bold text-2xl">Contacto 📩</h2>
        <div className="w-[10%] h-1 bg-pink-500"></div>
        {/* <h4 className="w-[90%] text-center md:w-[45%] font-semibold mt-2">¡Impulsa Tu Negocio con Bazzz! 💪💼</h4>
        <span className="w-[90%] text-center md:w-[80%]">
          Estamos emocionados de ayudarte a
          alcanzar tus metas. ¡Hablemos sobre tu proyecto y comencemos a crear
          la página web perfecta para que despegues en el mundo digital!
        </span> */}
      </motion.div>
      <motion.form
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[90%] md:w-[30%] flex flex-col gap-1 justify-center items-center"
        onSubmit={handleSubmit(submitData)}
      >
        <div className="w-full flex flex-col mb-2">
          <label className="font-medium">Nombre</label>
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-xl border-2 border-slate-100"
            {...register("subject")}
          />
          <div>
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject?.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col mb-2">
          <label className="font-medium">Email</label>
          <input
            type="text"
            className="outline-none px-2 py-1 rounded-xl border-2 border-slate-100"
            {...register("email")}
          />
          <div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col mb-2">
          <label className="font-medium">Tu mensaje</label>
          <textarea
            className="outline-none px-2 py-1 rounded-xl border-2 border-slate-100  resize-none min-h-[8rem]"
            {...register("message")}
          />
          <div>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message?.message}
              </span>
            )}
          </div>
        </div>
        <div className=" flex flex-col w-full">
          <button
            className="bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 text-white p-[2px] rounded-xl h-[2.5rem] flex justify-center items-center"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? <Spinner /> : "Enviar"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
