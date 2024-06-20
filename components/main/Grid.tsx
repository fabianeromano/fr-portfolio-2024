// import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );

export const gridItems = [
  {
    id: 1,
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am constantly innovating",
    className: "md:col-span-1",
  },
  {
    id: 4,
    title: "Biography",
    description:
      "Hi, I'm Fabian Romano, a full stack web developer with over 2 years of experience. I specialize in HTML, CSS, JavaScript, React, MongoDB, and Node.js. My focus is on creating functional and user-centric digital experiences. I stay updated with the latest web technology trends and deliver projects efficiently.",
    className: "md:col-span-2",
  },
];
