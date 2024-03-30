import AppStoreButton from "../AppStoreButton/AppStoreButton";

const Footer = () => {
  return (
    <footer className=" min-h-[30rem] flex flex-col  items-center text-center mt-10 ">
      <hr className="bg-gray-100 boeder-0 h-[0.1rem] w-full mb-8" />
      <img
        alt="ahead-logo"
        src="/images/logo.webp"
        className="h-14 rounded-xl aspect-square"
      />
      <p className="font-semibold text-2xl text-md text-[#3c17e5] mt-2">
        ahead
      </p>
      <div className="text-xs   my-5	flex gap-16 items-center font-semibold">
        <p className="flex gap-2 items-center ">
          <span className="before:absolute before:inset-0 relative before:bg-[#98f0d9] before:-z-10 before:rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
          </span>
          Auguststraße 26. 10117 Berlin
        </p>
        <p className="flex gap-2 items-center ">
          <span className="before:absolute before:inset-0 relative before:bg-[#98f0d9] before:-z-10 before:rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
          </span>
          hi@ahead-app.com
        </p>
      </div>
      <AppStoreButton />
      <p className="font-medium text-gray-500 text-xs mt-9 ">
        @2022 Ahead app. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
