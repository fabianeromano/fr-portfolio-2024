import { cn } from "@/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto relative z-20",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none bg-transparent border-[#7042f88b] border  justify-between flex flex-col space-y-4 p-4`,
        className
      )}>
      {id === 1 && (
        <div className="w-full h-full flex flex-col flex-1 relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full min-h-[6rem] object-cover"
            src="/video/world.webm"
          />
          <div className="group-hover/bento:translate-x-2 transition duration-200 absolute top-2 left-4">
            <div className="font-sans font-bold  text-neutral-200 mb-2">
              {title}
            </div>
            <div className="font-sans font-normal  text-xs text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
      {id === 2 && (
        <div className="w-full h-full relative flex flex-col gap-4 items-center justify-center">
          <Image
            className="w-full h-full absolute top-0 left-0 -z-10 "
            src="/images/bg.png"
            width={1000}
            height={1000}
            alt="bgimg"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              +2
            </h2>
            <p className="text-lg text-white">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              +5
            </h2>
            <p className="text-lg text-white">Projects Completed</p>
          </div>
        </div>
      )}
      {id === 3 && (
        <div className="w-full h-full relative rounded-lg overflow-hidden">
          <Image
            className="w-full h-full absolute top-0 left-0 -z-10 "
            src="/images/bg.png"
            width={1000}
            height={1000}
            alt="bgimg"
          />
          <Image
            className="w-full h-full"
            src="/images/profile.png"
            alt="Profile Fabian Romano"
            priority
            width={750}
            height={1000}
          />
        </div>
      )}
      {id === 4 && (
        <div className="w-full h-full relative rounded-lg overflow-hidden ">
          <Image
            className="w-full h-full object-cover absolute top-0 left-0 -z-10"
            src="/images/b1.svg"
            width={1000}
            height={1000}
            alt="b1img"
          />
          <div className="w-full h-full group-hover/bento:translate-x-2 transition duration-200 bg-black/50 p-2">
            <div className="font-sans font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              {title}
            </div>
            <div className="font-sans font-normal text-base lg:text-lg text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
