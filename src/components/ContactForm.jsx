import React, { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

const ContactForm = forwardRef((props, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Initialize EmailJS with your Public Key
    emailjs.init(import.meta.env.REACT_APP_EMAILJS_PUBLIC_API_KEY); // Replace with your actual public key

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY // EmailJS public key
      )
      .then(() => {
        setSubmitStatus("success");
        e.target.reset(); // Reset form after successful submission
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="container bg-white max-w-full p-2 md:p-4 mx-auto border-black border-2 md:border-4 hover:border-gray-500 "
      id="contactSec"
      ref={ref}
    >
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/3 md:text-sm/2 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-1 sm:mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full  bg-white px-2 py-1 md:px-3.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/3 md:text-sm/2 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-1 sm:mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full  bg-white px-2 py-1 md:px-3.5  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/3 md:text-sm/2 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-1 sm:mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full bg-white px-2 py-1 md:px-3.5  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/3 md:text-sm/2 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-1 sm:mt-2">
              <div className="flex  bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder=" 123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 ps-3.5  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                  required
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/3 md:text-sm/2 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-1 sm:mt-2">
              <textarea
                id="message"
                name="message"
                rows={2}
                className="block w-full bg-white px-2 py-1 md:px-3.5  text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`block w-full ${
              isSubmitting ? "bg-gray-500" : "bg-black hover:bg-gray-500"
            } px-2 py-1 md:px-3.5 .5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 hover:cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-black`}
          >
            {isSubmitting ? "Sending..." : "Let's talk"}
          </button>

          {submitStatus === "success" && (
            <p className="mt-2 text-green-600 text-center">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-2 text-red-600 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
});

export default ContactForm;
