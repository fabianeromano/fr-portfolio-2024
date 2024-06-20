import { EvervaultCard } from "../ui/EvervaultCard";

const Skills = () => {
  return (
    <section className="w-full px-[5%] z-20 py-20" id="skills">
      <h2 className="mb-8 text-center font-semibold text-5xl lg:text-[110px] font-secondary text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <EvervaultCard
          develop="frontend"
          className="border border-[#7042f88b] rounded-lg"
        />
        <EvervaultCard
          develop="backend"
          className="border border-[#7042f88b] rounded-lg"
        />
        <EvervaultCard
          develop="design"
          className="border border-[#7042f88b] rounded-lg"
        />
      </div>
    </section>
  );
};

export default Skills;
