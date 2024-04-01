import { carouselCards } from "./data";
import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";

const WorkWithUs = () => {
  const section = useRef();
  const { useGSAP, gsap } = useGsapHook();
  useGSAP(
    () => {
      gsap.fromTo(
        ".section_heading_left",
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
        ".section_heading_right",
        { opacity: 0, scale: 0.8, x: "100%" },
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
      className="bg-[#eeebfe] rounded-3xl h-[50rem] mx-5 2xl:mx-0  p-10 pt-20 flex flex-col custom-scrollbar overflow-hidden"
    >
      <div className="flex justify-between ">
        <h1 className="section_heading_left font-bold text-3xl lg:text-4xl	xl:text-5xl	">
          Work with us
        </h1>
        <h1 className="section_heading_right  font-semibold text-[#613eed] text-3xl lg:text-4xl	xl:text-5xl	hidden md:inline-block">
          ahead
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-10 flex-1 overflow-y-scroll custom-scrollbar ">
        <div className=" rounded-xl flex-1 mb-20 relative md:sticky top-0  ">
          <div className="bg-white  rounded-3xl flex-1 ">
            <div className="p-10">
              <img src="/images/ghost_1.png" className="h-10 " />
              <h2 className="text-xl font-bold my-3">About</h2>
              <p className=" text-lg text-gray-600 font-medium">
                At ahead our goal is to make self- improvement fun and lasting.
                We know there&apos;s a way how to make it work. And that&apos;s
                what ahead is all about!
              </p>
            </div>

            <div className=" bg-[#fef7f1] p-10 rounded-3xl">
              <h2 className="text-xl font-bold my-3 ">Product</h2>
              <p className=" text-lg text-gray-600 font-medium">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>
        <div className=" px-10   rounded-xl  flex  flex-1 flex-col gap-5 ">
          {carouselCards.map((e) => (
            <div
              key={e.id}
              className=" bg-white p-8 rounded-3xl ms-auto max-w-xs"
            >
              <h2 className=" font-bold mb-3 text-base">{e.title}</h2>
              <p className=" text-sm text-gray-500 font-medium">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
