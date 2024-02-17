"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        },
      );
  };

  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="wrapper min-h-[calc(100dvh-6rem)] h-full flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* fORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-2/3 md:h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-16 3xl:p-20"
        >
          <span>Dear Eclipse Dev,</span>
          <textarea
            rows={4}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My email addres is:</span>
          <input
            name="user_email"
            type="email"
            placeholder="example@email.com"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <input
            type="submit"
            value="Send"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 cursor-pointer"
          />
          {success && (
            <span className="text-green-600 font-semibold text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-center">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
