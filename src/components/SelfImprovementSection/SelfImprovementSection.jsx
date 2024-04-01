import { listData } from "./listData";
import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";

const SelfImprovementSection = () => {
  const section = useRef();
  const { useGSAP, gsap } = useGsapHook();
  useGSAP(
    () => {
      gsap.fromTo(
        ".section_heading",
        { opacity: 0, scale: 0.8, x: "-100%" },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );
    },

    { scope: section }
  );
  return (
    <section
      ref={section}
      className=" min-h-[650px] flex justify-center flex-col p-10 px-2 md:px-10 mt-20 overflow-hidden"
    >
      <p className="font-medium text-md ps-1 section_heading">
        Wrong with self-improvement & how we&apos;re fixing it.
      </p>
      <h1 className="mt-2 font-bold leading-tight tracking-wide mb-20 section_heading text-3xl lg:text-4xl	xl:text-5xl	">
        Self-improvement. Ugh.
      </h1>
      <div className="h-[30rem] overflow-y-scroll no-scrollbar">
        <ul className="relative max-w-xl mx-auto mt-10">
          <div className="absolute  bg-[#6341ed] w-[0.2rem] top-2 bottom-20 -left-2 "></div>
          {listData.map((ele) => {
            return (
              <li className="mb-10 ms-4" key={ele.id}>
                <div className="absolute w-3 h-3 bg-[#6341ed] rounded-full mt-1.5 -left-1.5 -translate-x-1/2 before:absolute before:-inset-2 before:bg-[#6341ed] before:opacity-20 before:-z-10 before:rounded-full "></div>
                <h2 className="text-xl font-semibold">{ele.title}</h2>
                <p className="font-medium mt-3">{ele.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SelfImprovementSection;
