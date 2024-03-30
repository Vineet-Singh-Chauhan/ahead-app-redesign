import { listData } from "./listData";

const SelfImprovementSection = () => {
  return (
    <div className=" min-h-[650px] flex justify-center flex-col p-10 mt-20">
      <p className="font-medium text-md ps-1">
        Wrong with self-improvement & how we&apos;re fixing it.
      </p>
      <h1 className="text-5xl font-bold leading-tight tracking-wide mb-20	">
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
    </div>
  );
};

export default SelfImprovementSection;
