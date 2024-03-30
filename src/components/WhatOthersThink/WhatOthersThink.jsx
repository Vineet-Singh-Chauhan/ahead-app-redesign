import { colors, data } from "./data";

const WhatOthersThink = () => {
  return (
    <div className="bg-[#edf8fe] rounded-3xl min-h-[650px] mx-5 2xl:mx-0  flex justify-center items-center flex-col px-10">
      <p className="font-medium text-lg ps-1">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <h1 className="text-5xl font-bold mt-2	">
        Ever wondered what others think of you?
      </h1>
      <div className="flex justify-between  relative w-full md:w-3/4 mt-20">
        <div className=" start-24  end-28 border-t-2 border-[#f9ab00]  absolute border-dashed  "></div>
        {data.map((ele, i) => (
          <div key={ele.id}>
            <div className="relative">
              <img
                src="/images/star.png"
                className="h-20 absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              />
              <p className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  ">
                {i + 1}
              </p>
            </div>
            <p className="max-w-[250px] text-center text-xs font-medium mt-10">
              {ele.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-xl w-3/6 mt-16 flex justify-center  items-center py-14">
        <div className="flex justify-between   relative w-full   my-10   mx-10 ">
          <div className=" start-2 end-2 border-t-2 border-gray-300  absolute  "></div>
          {colors.map((ele, i) => (
            <div key={i}>
              <div className="relative">
                <div
                  className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-[${ele}] `}
                ></div>

                <p
                  className={` absolute top-1/2 left-1/2 ${
                    i == 0 ? "-translate-x-full" : ""
                  } ${
                    i & 1 ? "-translate-y-1/3" : "-translate-y-24"
                  }   px-3 py-2  rounded-lg  w-max  text-sm font-medium mt-10 text-white bg-[${ele}]`}
                >
                  {i == 0 ? "You" : `Anoymonos ${i}`}
                </p>
              </div>
              {/* <p
                className={` px-3 py-2  rounded-lg  w-fit text-center text-sm font-medium mt-10 text-white bg-[${ele}]`}
              >
                {i == 0 ? "You" : `Anoymonos ${i}`}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOthersThink;
