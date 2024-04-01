import { cards } from "./CarouselData.js";
import { useRef } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";

const SoundFamiliarSection = () => {
  const section = useRef();
  const { useGSAP, gsap } = useGsapHook();

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#heading",
        },
      });
      tl.fromTo(
        "#heading",
        { opacity: 0, scale: 0.5, x: -1000, y: 100 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 2,
          ease: "elastic.out(0.3,0.3)",
        }
      )
        .fromTo(
          ".familiar-carousel",
          { x: 0 },
          {
            x: "-300%",
            duration: 1,
          },
          "<"
        )
        .fromTo(
          "#ghost",
          { x: "50vw", y: "10vh" },
          {
            x: "0",
            y: 0,
            duration: 1,
          },
          "<<"
        );
    },

    { scope: section }
  );

  return (
    <section ref={section} className="relative overflow-hidden">
      <h2
        id="heading"
        className=" font-bold ps-10 heading text-3xl lg:text-4xl	xl:text-5xl"
      >
        Does this sound familiar...
      </h2>
      <img
        id="ghost"
        src="/images/ghost_red.svg"
        className="h-14  -rotate-12 ms-5 absolute right-1/3 top-0 hidden md:inline-block"
      />
      <div className="flex overflow-scroll no-scrollbar gap-8 py-5 my-10 [&>*:nth-child(2n+1)]:bg-[#d8f2ff] [&>*:nth-child(2n)]:bg-[#ffefd5] [&>*:nth-child(3)]:bg-[#6341ee]  [&>div>p]:text-gray-500 [&>*:nth-child(3)>p]:text-white [&>*:nth-child(3)]:text-white [&>*:nth-child(3)]:-rotate-6">
        {cards.map((item) => (
          <div
            key={item.id}
            className={`  familiar-carousel  rounded-3xl p-6 w-[320px] shrink-0	`}
          >
            <p className="text-2xl ">{item.emoji}</p>
            <h2 className="font-bold font-sm my-4">{item.title}</h2>
            <p className="text-xs  font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoundFamiliarSection;
