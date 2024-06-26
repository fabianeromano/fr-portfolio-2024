"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/Pin";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../sub/Card";

const RecentProjects = () => {
  return (
    <div className="w-full" id="projects">
      <h2 className="text-center leading-tight font-semibold text-5xl lg:text-[110px] font-secondary text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Projects
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
            icons={item.iconLists}
          />
        ))}
        {/* {projects.map((item) => (
          <a
            href={`/project/${item.id}`}
            key={item.id}
            className="my-2 lg:my-8 flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer title={item.demourl} href="/google.com">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}>
                  <Image
                    src="/images/bg.png"
                    priority
                    width={1000}
                    height={1000}
                    alt="bgimg"
                  />
                </div>
                <Image
                  src={item.thumbnail}
                  width={1000}
                  height={1000}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1
                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                style={{
                  color: "#BEC1DD",
                }}>
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
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

                <div className="flex justify-center items-center">
                  <p className="flex md:text-sm text-xs text-white">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default RecentProjects;
