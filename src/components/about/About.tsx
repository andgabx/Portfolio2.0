import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-primary">
              <span className="bg-primary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                E
              </span>
              ver since I can remember, Computer Science has been my dream
              career. When I discovered the world of software development, I
              knew I had found my path. While hardware is cool, my passion has
              always leaned towards software, especially front-end development.
              There’s something about seeing a beautifully crafted, responsive
              website that always caught my eye and made me want to create my
              own. Right now, I’m working on a really fun solo project, I'm
              trying to rebuild a School Management System. When I’m not coding,
              you’ll probably find me on the mat practicing Brazilian Jiu-Jitsu,
              getting lost in a good book, or hanging out with friends.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-primary">
              I currently focused on building my skills in React, Next.js,
              Tailwind CSS, and TypeScript, also learning about the main
              technologies used in the backend, such as Node.js, Express, and
              PostgreSQL.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
