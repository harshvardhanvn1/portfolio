import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import ExperienceV2 from "@/components/ExperienceV2";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import TechSphereSection from "@/components/TechSphereSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 "  >
      <div className= "max-w-7xl w-full">
        <FloatingNav  navItems = {navItems}/>
        <h1>Hello,Portfolio</h1>
        <Hero />
        <Grid />
        <Education/>
        <ExperienceV2 />
        <RecentProjects />
        <TechSphereSection/>
        <Footer />
      </div>
    </main>
  );
}
