"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BiDownArrow } from "react-icons/bi";
import Image from "next/image";
import { Truculenta } from "next/font/google";
export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-4 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.a
          href="/cv-fabianromano.pdf"
          target="_blank"
          download={true}
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <BiDownArrow className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Download CV</h1>
        </motion.a>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w--[600px] w-auto h-auto">
          <span>
            FullStack
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Developer{" "}
            </span>
            Fabian Romano
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a Full Stack developer with experience in Website. Check out
          my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          See Projects
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
        <Image
          src="/images/mainIconsdark.svg"
          alt="work icons"
          priority
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}
