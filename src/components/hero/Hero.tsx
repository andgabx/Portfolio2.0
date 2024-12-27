import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-3xl sm:text-5xl font-black text-primary md:text-7xl">
              Anderson Gabriel
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-primary md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-primary">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto font-bold leading-relaxed md:leading-relaxed max-w-xl text-sm text-primary md:text-base">
              As a seasoned full stack developer, I specialize in creating
              visually stunning and highly interactive user interfaces. With a
              keen eye for design and a deep understanding of modern web
              technologies, I transform complex ideas into intuitive and
              engaging digital experiences.
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-primary-light hover:text-white hover:border-primary-light mt-4 bg-primary text-white border-primary md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
