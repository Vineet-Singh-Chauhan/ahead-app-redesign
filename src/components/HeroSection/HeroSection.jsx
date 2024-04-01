import AppStoreButton from "../AppStoreButton/AppStoreButton";
import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";
const HeroSection = () => {
  const section = useRef();
  const { useGSAP, gsap } = useGsapHook();

  useGSAP(
    () => {
      gsap.fromTo(
        "#hero_txt",
        { opacity: 0, scale: 0.8, x: "-100%" },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "elastic.out(0.3,0.3)",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        "#left_card",
        { scale: 0.3 },
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.3,0.3)",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        "#green_slice_1",
        { rotate: -100 },
        {
          rotate: 125,
          duration: 1,
          ease: "elastic.out(0.3,0.3)",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        ".grow_animate",
        { scale: 0.5 },
        {
          scale: 1,
          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );
      gsap.fromTo(
        "#left_card",
        { scale: 0.5 },
        {
          scale: 1,
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
      className="bg-[#eeebfe] rounded-3xl min-h-[650px] mx-5 2xl:mx-0 flex items-center px-10 relative overflow-hidden  justify-between"
    >
      <div id="hero_txt">
        <p className="font-medium text-lg ps-1">Ahead app</p>
        <h1 className=" font-bold leading-tight tracking-wide text-3xl lg:text-5xl	xl:text-6xl">
          Master your life <br />
          by mastering
          <br /> emotions
        </h1>
        <div className="flex gap-5 mt-10 flex-col md:flex-row">
          <AppStoreButton />
          <div className="flex flex-col">
            <span className="flex gap-5">⭐⭐⭐⭐⭐</span>
            <span className="font-medium text-gray-500 text-sm">
              100+ AppStore reviews
            </span>
          </div>
        </div>
      </div>

      {/* circular carousel starts */}
      <div className="hidden lg:inline-block mx-auto relative ">
        <div className="grow_animate before:absolute before:top-[5rem] before:right-3 before:z-0 before:bg-[#dbd4f6] before:rounded-full before:h-[380px]  before:w-[380px] after:absolute  after:border-2 after:border-dashed after:h-[500px] after:w-[500px] after:rounded-full after:top-[1rem] after:-left-20 after:border-white  after:z-0">
          <img
            src="/images/mobile.png"
            className=" grow_animate max-h-[550px]  mx-auto z-10 isolate"
          />
          <img
            src="/images/card.png"
            className=" h-28 z-10 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2"
          />
          <img
            id="left_card"
            src="/images/card.png"
            className=" grow_animate h-28 mx-auto z-10 absolute top-1/2 -translate-y-1/2 -translate-x-full  left-1/3"
          />
          {/* small ghosts */}
          <img
            src="/images/ghost_pink.svg"
            className="h-6  absolute -left-[5.6rem] top-1/2 rotate-[175deg]  z-10"
          />
          <img
            src="/images/ghost_red.svg"
            className="h-6  absolute -right-[3.2rem] top-[60%] rotate-[20deg]  z-10"
          />
          <img
            src="/images/ghost_blue.svg"
            className="h-6  absolute top-[0.6rem] left-1/2 -rotate-[80deg]  z-10"
          />

          {/* large ghosts */}
          <img
            src="/images/ghost_pink.svg"
            className="h-16  absolute -left-[1.6rem] bottom-[10%] rotate-[15deg]  z-10"
          />
          <img
            src="/images/ghost_red.svg"
            className="h-10  absolute -right-[3.5rem] top-[30%] rotate-[20deg]  z-10"
          />
          <img
            src="/images/ghost_blue.svg"
            className="  h-14  absolute top-[0.4rem] left-[10%] -rotate-[20deg] z-10"
          />
        </div>
      </div>

      {/* circular carousel ends */}

      {/* Decorative items start */}
      <img
        id="green_slice_1"
        src="/images/greenSlice.png"
        className="hidden lg:inline-block  h-12 absolute  opacity-80 rotate-[125deg]  left-20 -top-1 "
      />
      <img
        src="/images/greenSlice.png"
        className="hidden lg:inline-block  h-6 absolute  opacity-80 rotate-[180deg]  left-1/3 top-20"
      />

      <div className=" hidden lg:inline-block  h-8 w-8 bg-[#f3c7c8] rounded-full absolute -top-2 right-56 "></div>
      <div className=" grow_animate hidden lg:inline-block  h-8 w-8 bg-[#f3c7c8] rounded-full absolute top-[59%] -translate-x-1/2 left-0"></div>
      <div className=" hidden lg:inline-block  h-5 w-5 bg-[#f3c7c8] rounded-full absolute left-[40%] top-14  "></div>
      <div className=" hidden lg:inline-block  h-9 w-9  bg-[#f7d3bd] rounded-full absolute left-[30%] top-28 before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#e86c5e] before:h-3 before:w-3 before:absolute before:rounded-full "></div>
      <div className=" hidden lg:inline-block  grow_animate h-8 w-8 bg-[#ea695b] rounded-full absolute bottom-0 translate-y-1/2 left-1/3 "></div>

      {/* Decorative items end */}
    </section>
  );
};

export default HeroSection;
