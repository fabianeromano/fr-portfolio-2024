"use client";
import React from "react";
import { PinContainer } from "../ui/Pin";
import Image from "next/image";

export function Card({
  id,
  title,
  description,
  thumbnail,
  icons,
}: {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  icons: string[];
}) {
  return (
    <div className="my-10 w-full flex items-center justify-center ">
      <PinContainer title="See Project" href={`/project/${id}`}>
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <div className="flex flex-1 w-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
              className="w-full h-full object-cover"
              src={thumbnail}
              alt="title"
              width={400}
              height={300}
            />
          </div>
          <h3 className="max-w-xs !pb-2 mt-2 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <p className="text-slate-500 line-clamp-2">{description}</p>
          </div>

          <div className="flex items-center mt-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}>
                <Image
                  src={icon}
                  width={1000}
                  height={1000}
                  alt="icon5"
                  className="p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
