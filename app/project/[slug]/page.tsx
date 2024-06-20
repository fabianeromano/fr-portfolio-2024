"use client";
import React from "react";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Project({ params }: { params: { slug: string } }) {
  const item = projects.find((item) => item.id == parseInt(params.slug));
  return (
    <main className="h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 top-[-300px] h-full w-full z-[1] object-cover">
        <source src="/video/blackhole.webm" type="video/webm" />
      </video>
      <section className="relative flex flex-col h-full w-full z-40">
        <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[99] flex items-center justify-between px-[5%]">
          <Link
            href="/"
            className="h-auto w-auto flex items-center cursor-pointer">
            <p className="font-bold text-gray-300">
              <span className="md:block hidden">Fabian Romano</span>
              <span className="block md:hidden">FR</span>
            </p>
          </Link>
          <a
            href={item?.demourl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <p className="text-white cursor-pointer">Demo Link</p>
          </a>

          <a
            href={item?.codeurl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer">
            <p className="text-white cursor-pointer">Code Link</p>
          </a>
          <Link href="/" className="text-white cursor-pointer">
            Close
          </Link>
        </header>
        <div className="w-full px-2 md:px-[5%]">
          <h1 className="text-center text-4xl lg:text-8xl font-medium tracking-tight text-white mb-8 mt-20">
            {item?.title}
          </h1>
          <div className="w-full flex lg:flex-row flex-col">
            <article className="w-full lg:w-1/2 relative">
              <div className="w-full lg:h-screen lg:sticky lg:top-0 lg:left-0 pt-10 lg:pt-20 px-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-start">
                    <p className="text-xl text-gray-500">Development</p>
                    <p className="text-lg text-white font-medium">
                      {item?.development}
                    </p>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-xl text-gray-500">Application</p>
                    <p className="text-lg text-white font-medium">
                      {item?.application}
                    </p>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-xl text-gray-500">Year</p>
                    <p className="textl-lg text-white font-medium">
                      {item?.year}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-8 gap-2">
                  <p className="text-xl text-gray-500">Stack</p>
                  <div className="flex justify-start items-center gap-2">
                    {item?.iconLists.map((icon, index) => (
                      <Image
                        className="w-8 lg:w-10 h-auto"
                        key={`icon-${index}`}
                        src={icon}
                        alt={icon}
                        width={400}
                        height={300}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
            <article className="w-full lg:w-1/2 px-8 flex flex-col pt-8 lg:pt-0 items-center justify-center">
              <p className="font2 text-xl text-white">{item?.description}</p>
              <div className="w-full flex flex-col justify-center items-center pb-4">
                {item?.images.map((item, index) => (
                  <Image
                    key={`img${index}`}
                    className="w-full h-auto mt-4"
                    src={item}
                    alt={`project-img${index}`}
                    width={400}
                    height={300}
                    priority
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
