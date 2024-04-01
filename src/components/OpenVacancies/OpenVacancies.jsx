import { jobs } from "./jobs";
import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";

const OpenVacancies = () => {
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
    <section ref={section} className="overflow-hidden">
      <h2 className="section_heading text-4xl font-bold mt-20 ps-10 ">
        Open vacancies
      </h2>
      <div className="flex overflow-scroll no-scrollbar gap-8 py-5 my-5 min-h-80  ps-10 relative ">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="  bg-[#fefbec] rounded-3xl p-6 w-[360px]  h-[200px] hover:h-[250px] hover:bg-[#ffefd7] transition-all ease-linear duration-200 shrink-0 relative overflow-hidden group "
          >
            <p className="text-lg font-bold ">{job.title}</p>
            <ul className="list-disc text-sm  gap-4  list-inside leading-8	font-medium">
              {job.desc.map((ele, i) => (
                <li key={i}>{ele}</li>
              ))}
            </ul>
            <button className="rounded-full bg-black text-white py-3 px-4 text-sm mt-5 bottom-0 invisible group-hover:visible transition-all duration-200 group-hover:opacity-100 opacity-0">
              See details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenVacancies;
