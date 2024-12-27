import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-primary-light px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center text-white font-bold">
            Contact me!
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-white leading-relaxed">
            Send me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/andgabx"
              target="_blank"
              className="text-white hover:underline"
            >
              Linkedin
            </Link>{" "}
            
            
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:agvms@cesar.school">
            <div className="flex items-center justify-center text-white gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-background transition-colors">
              <AiFillMail />
              <span>agvms@cesar.school</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
