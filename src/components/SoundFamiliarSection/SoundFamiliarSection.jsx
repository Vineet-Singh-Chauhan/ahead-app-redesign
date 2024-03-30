import { cards } from "./CarouselData.js";

const SoundFamiliarSection = () => {
  return (
    <>
      <h2 className="text-5xl font-bold ps-10 ">Does this sound familiar...</h2>
      <div className="flex overflow-scroll no-scrollbar gap-8 py-5 my-10 [&>*:nth-child(2n+1)]:bg-[#d8f2ff] [&>*:nth-child(2n)]:bg-[#ffefd5] [&>*:nth-child(3)]:bg-[#6341ee]  [&>div>p]:text-gray-500 [&>*:nth-child(3)>p]:text-white [&>*:nth-child(3)]:text-white [&>*:nth-child(3)]:-rotate-6">
        {cards.map((item) => (
          <div
            key={item.id}
            className={`bg-[${item.bgColor}] rounded-3xl p-6 w-[320px] shrink-0	`}
          >
            <p className="text-2xl ">{item.emoji}</p>
            <h2 className="font-bold font-sm my-4">{item.title}</h2>
            <p className="text-xs  font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SoundFamiliarSection;
