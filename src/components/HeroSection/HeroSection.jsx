import AppStoreButton from "../AppStoreButton/AppStoreButton";

const HeroSection = () => {
  return (
    <div className="bg-[#eeebfe] rounded-3xl min-h-[650px] mx-5 2xl:mx-0  flex justify-center flex-col px-10">
      <p className="font-medium text-lg ps-1">Ahead app</p>
      <h1 className="text-6xl font-bold leading-tight tracking-wide	">
        Master your life <br />
        by mastering
        <br /> emotions
      </h1>
      <div className="flex gap-5 mt-10">
        <AppStoreButton />
        <div className="flex flex-col">
          <span className="flex gap-5">⭐⭐⭐⭐⭐</span>
          <span className="font-medium text-gray-500 text-sm">
            100+ AppStore reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
