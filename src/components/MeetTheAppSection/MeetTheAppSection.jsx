const MeetTheAppSection = () => {
  return (
    <div className="bg-[#fef6f1] rounded-3xl min-h-[650px] mx-5 2xl:mx-0  flex justify-center flex-col px-10">
      <p className="font-medium text-md ps-1">Built out of frustration</p>
      <h1 className="text-5xl font-bold leading-tight tracking-wide	">
        Meet the ahead app
      </h1>
      <div className="flex gap-5 mt-10">
        <div className="flex-1"></div>
        <div className="flex flex-col flex-1">
          <p className="font-medium text-gray-500 text-lg px-5">
            A personalized pocket coach that provides bite-sized, science-driven
            tools to boost emotional intelligence.
            <br />
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheAppSection;
