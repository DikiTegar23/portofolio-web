"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4xl text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-orange-400">
              Hello, i'm{" "}
            </span>
            <br></br>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Diki Tegar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Dev",
                1000,
                "Mobile Dev",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <p className="text-yellow-300 text-base sm:text-lg lf:text-xl mb-10">
            Always ready to create amazing software for better world!
          </p>
          <div className="mb-10">
            <a
              href="https://wa.me/6287814171536?text=Halo%20Diki,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-linear-to-r from-red-600 via-orange-400 to-yellow-300 hover:from-red-700 hover:via-orange-500 hover:to-yellow-400 text-black font-extrabold inline-block text-center"
            >
              Hire Me
            </a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-linear-to-br from-red-600 via-orange-500 to-yellow-200 hover:bg-slate-800 text-white font-extrabold mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-linear-to-r from-black via-orange-350 to-yellow-400 w-62.5 h-62.5 relative">
            <Image
              src="/images/herooo-image.png"
              alt="Hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
