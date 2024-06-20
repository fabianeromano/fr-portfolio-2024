"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { SkillsFrontend } from "@/constants";
import { SkillsBackend } from "@/constants";
import { SkillsDesign } from "@/constants";

export const EvervaultCard = ({
  develop,
  className,
}: {
  develop?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-lg w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="relative h-full w-full  rounded-lg flex items-start justify-center">
            {/* <div className="absolute w-full h-full bg-black/[0.8] blur-sm rounded-full" /> */}

            {develop === SkillsFrontend.develop && (
              <div className="w-full h-full flex flex-col items-center justify-start">
                <h4 className="text-center text-xl font-semibold text-white my-8 px-4 rounded-full group-hover/card:bg-black/80">
                  FrontEnd
                </h4>
                <div className="flex w-full justify-center items-center gap-4 flex-wrap ">
                  {SkillsFrontend.icons.map((icon, index) => (
                    <span
                      key={`frontend-${index}`}
                      className="rounded-full bg-transparent border border-[#7042f88b] w-14 h-14 flex items-center justify-center overflow-hidden group-hover/card:bg-black/80">
                      <Image
                        className="w-auto h-8"
                        src={icon}
                        alt="iconsSkills"
                        width={1000}
                        height={1000}
                      />
                    </span>
                  ))}
                </div>
              </div>
            )}

            {develop === SkillsBackend.develop && (
              <div className="w-full h-full flex flex-col items-center justify-start">
                <h4 className="text-center text-xl font-semibold text-white my-8 px-4 rounded-full group-hover/card:bg-black/80">
                  Backend
                </h4>
                <div className="flex w-full justify-center items-center gap-8 flex-wrap ">
                  {SkillsBackend.icons.map((icon, index) => (
                    <span
                      key={`frontend-${index}`}
                      className="rounded-full bg-transparent border border-[#7042f88b] w-14 h-14 flex items-center justify-center overflow-hidden group-hover/card:bg-black/80">
                      <Image
                        className="w-auto h-8"
                        src={icon}
                        alt="iconsSkills"
                        width={1000}
                        height={1000}
                      />
                    </span>
                  ))}
                </div>
              </div>
            )}

            {develop === SkillsDesign.develop && (
              <div className="w-full h-full flex flex-col items-center justify-start">
                <h4 className="rounded-full text-center text-xl px-4 font-semibold text-white my-8 group-hover/card:bg-black/80">
                  Design
                </h4>
                <div className="flex w-full justify-center items-center gap-8 flex-wrap ">
                  {SkillsDesign.icons.map((icon, index) => (
                    <span
                      key={`frontend-${index}`}
                      className="rounded-full bg-transparent border border-[#7042f88b] w-14 h-14 flex items-center justify-center overflow-hidden group-hover/card:bg-black/80">
                      <Image
                        className="w-auto h-8"
                        src={icon}
                        alt="iconsSkills"
                        width={1000}
                        height={1000}
                      />
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-lg  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}>
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
