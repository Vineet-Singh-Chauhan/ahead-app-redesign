import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";

const MeetTheAppSection = () => {
  const section = useRef();
  const { useGSAP, gsap } = useGsapHook();

  useGSAP(
    () => {
      gsap.fromTo(
        ".rotate_infinite",
        { rotate: 0 },
        {
          rotate: 360,
          delay: 0,
          duration: 1,
          repeat: -1,
          ease: "linear",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        ".meetApp_heading",
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
      gsap.fromTo(
        ".meetApp_txt",
        { opacity: 0, scale: 0.8, x: "-30%" },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );

      gsap.fromTo(
        ".grow_animate",
        { scale: 0, y: 100 },
        {
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        "#circle",
        { x: 500, y: 100 },
        {
          x: 0,
          y: 0,
          duration: 3,
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
      className="bg-[#fef6f1] rounded-3xl min-h-[550px] mx-5 2xl:mx-0  flex  flex-col px-10 relative overflow-x-clip  "
    >
      <p className="meetApp_heading font-medium text-md ps-1 mt-28">
        Built out of frustration
      </p>
      <h1 className="meetApp_heading text-5xl font-bold leading-tight tracking-wide	">
        Meet the ahead app
      </h1>
      <div className="flex gap-0 md:gap-5 mt-10">
        <div className="flex-0 md:flex-1"></div>
        <div className="flex flex-col flex-1">
          <p className="meetApp_txt font-medium text-gray-500 text-lg px-0 md:px-5">
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
            <br />
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>

      {/* decorative items start*/}
      <img
        src="/images/greenSlice.png"
        className="rotate_infinite h-8 absolute  opacity-80 rotate-[145deg]  right-32 top-24 "
      />
      <img
        src="/images/flower.svg"
        className=" rotate_infinite h-16 absolute  opacity-80 rotate-[145deg]  right-12 -top-8 "
      />

      <div
        id="circle"
        className=" h-60 w-60 bg-[#fae8dc] rounded-full absolute top-[49%] -translate-x-1/2 left-18 hidden md:inline-block"
      ></div>
      <div className=" h-9 w-9  bg-[#f7d3bd] rounded-full absolute left-[30%] bottom-28 before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#e86c5e] before:h-3 before:w-3 before:absolute before:rounded-full  hidden md:inline-block"></div>
      <div className=" h-5 w-5 bg-[#f3c7c8] rounded-full absolute left-[37%] bottom-48  hidden md:inline-block "></div>
      <img
        src="/images/greenSlice.png"
        className="rotate_infinite h-6 absolute left-[32%] bottom-40  opacity-80 rotate-[150deg]  hidden md:inline-block"
      />

      <div className="h-44 w-44 bg-[#f6f6f6] absolute left-28 bottom-28 rounded-full  before:h-36 before:w-36  before:bg-white  before:absolute before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:inset-1/2  hidden md:inline-block">
        <img
          src="/images/ghost_pink.svg"
          className=" h-16 -translate-x-1/2 -translate-y-1/2 inset-1/2 absolute  hidden md:inline-block"
        />

        <div className="grow_animate relative  hidden md:inline-block">
          <img
            src="/images/star.png"
            className="h-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          />
          <p className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  ">
            1
          </p>
        </div>
      </div>

      {/* decorative items end*/}
    </section>
  );
};

export default MeetTheAppSection;
