import { Grid } from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import RecentProjects from "@/components/main/RecentProjects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col w-full min-h-[850px] gap-20">
        <Navbar />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
      </div>
    </main>
  );
}
