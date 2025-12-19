"use client";

import SearchAsset from "@/public/imgs/undraw/undraw_file-search_cbur.svg";
import Image from "next/image";

import useScrollReveal from "../../libs/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 flex items-center justify-center reveal">
          <h1 className="text-4xl text-amber-600 reveal">
            Talk to us and tell us{" "}
            <span className="bg-amber-600/20 font-bold">what you need.</span>
          </h1>
        </div>
        <div className="col-span-12">
          <div className="bg-white w-full rounded-3xl grid grid-cols-12 border border-amber-600 overflow-hidden divide-x">
            <div className="col-span-6">
              <div className="h-full w-full rounded-s-3xl flex flex-col justify-center items-center p-10">
                <Image
                  src={SearchAsset}
                  alt="Contact Us Image"
                  className="w-full h-auto mb-6 reveal"
                />
                <div className="text-center">
                  <h2 className="text-3xl font-medium mb-4 reveal">Get in Touch</h2>
                  <p className="text-gray-700 reveal">
                    We would love to hear from you! Whether you have a question
                    about our services, pricing, or anything else, our team is
                    ready to answer all your questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <form className="p-10 flex flex-col gap-6 reveal">
                <label className="text-lg font-medium text-xl text-gray-600">
                  Describe your project needs:
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-xl p-4 w-full focus:outline-amber-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-xl p-4 w-full focus:outline-amber-600"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-xl p-4 w-full focus:outline-amber-600"
                />
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 rounded-xl p-4 w-full h-32 focus:outline-amber-600"
                ></textarea>
                <button
                  type="submit"
                  className="bg-amber-600 text-white rounded-full px-6 py-3 w-fit hover:bg-amber-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
