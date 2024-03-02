import React from "react";
import Container from "../Container";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgegyqoo");

  return (
    <Container>
      <div className="flex items-center justify-around" id="contact">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto"
        >
          <div className="flex gap-2 items-center">
            <svg
              class="w-10 h-10 text-gray-600 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.6l-2.9 2.6c-1 .9-2.5.2-2.5-1.1V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="font-bold text-3xl text-gray-600">Contact me</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <label className="mr-5 text-gray-500">Email Addres:</label>
            <input
              type="email"
              placeholder="exmple@gmail.com"
              className="w-11/12 md:w-72 rounded-md"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-start items-start flex-col md:flex-row">
            <label className="mr-4 text-gray-500"> your Message:</label>
            <textarea
              cols="20"
              rows="5"
              className="w-11/12 md:w-72"
              placeholder="Message.."
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className={`disabled:opacity-30 disabled:cursor-not-allowed w-24 bg-gray-200 px-5 py-1 rounded-md hover:border-gray-400 border-2 hover:text-black transition-all duration-300`}
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
          {state.succeeded ? (
            <div className="flex gap-1 items-center">
              <Lottie style={{ height: 50 }} animationData={doneAnimation} />
              <p>the message has been sent successfully!!!</p>
            </div>
          ) : null}
        </form>
        <div className="lg:block hidden">
          <Lottie className="w-[26rem]" animationData={emailAnimation} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
