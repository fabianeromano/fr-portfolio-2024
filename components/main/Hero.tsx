import React from "react";
import HeroContent from "../sub/HeroContent";

export default function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full py-20" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover">
        <source src="/video/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
}
