import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[2px] bg-primary" />
      <h2>
        <Reveal>
          <span className="text-3xl md:text-5xl font-black text-end text-primary">
            {title}
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
