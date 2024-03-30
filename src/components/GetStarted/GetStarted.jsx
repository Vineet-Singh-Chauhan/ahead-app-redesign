const GetStarted = () => {
  return (
    <div className=" min-h-[650px] mx-5 2xl:mx-0  flex justify-center items-center text-center flex-col px-10">
      <p className="font-medium text-md ps-1">We take privacy seriously</p>
      <h1 className="text-3xl font-bold leading-tight tracking-wide my-3	">
        Before you get started
      </h1>
      <p className="font-medium text-gray-600 text-xl px-9 max-w-2xl">
        &ldquo;We won&apos;t share your answers with anyone (and won&apos;t ever
        tell you which friends said what about you)&rdquo;
      </p>
      <p className="font-medium text-secondaryFontColor text-lg my-8">
        with love,
      </p>
      <button className="rounded-full bg-black text-white py-3 px-4 text-sm">
        Start a test
      </button>
      <p className=" text-gray-600 text-xs mt-4 font-medium">
        Take only 5 minutes
      </p>
    </div>
  );
};

export default GetStarted;
