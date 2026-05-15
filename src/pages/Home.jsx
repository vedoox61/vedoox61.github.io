import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20 bg-white text-black min-h-screen" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-3 lg:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >

            {/* NAME */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Hello,{" "}
              <span className="text-red-500 font-extrabold">
                <TypeAnimation
                  sequence={["I am Amine", 1500]}
                  speed={20}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>

            {/* ROLE */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <span className="font-extrabold text-red-500">Fullstack</span>{" "}
              <span className="font-extrabold text-black">
                Developer
              </span>
            </motion.h2>

            {/* LOCATION */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Based In <span className="font-extrabold text-red-500">Algeria</span>
            </motion.h2>

          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-500 text-sm lg:text-base mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Passionate about technology, I specialize in Web Development and Web Designing.
            I build modern, high-performance applications and continuously improve my skills
            to create impactful digital experiences.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="border border-gray-300 p-3 rounded-full text-gray-600 bg-white"
                whileHover={{
                  scale: 1.1,
                  borderColor: "#ef4444",
                  color: "#ef4444",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-[350px] lg:h-[450px] w-auto mx-auto"
            src="/assets/img1.png"
            alt="Hero"
          />
        </motion.div>

      </div>
    </div>
  );
}