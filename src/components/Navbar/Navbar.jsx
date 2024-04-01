// middle menu data
import { Link } from "react-router-dom";
import { middleMenuList } from "./middle-menu";

const Navbar = () => {
  return (
    <nav className="mx-auto py-4 px-10 flex justify-between bg-white sticky top-0 z-50">
      <span>
        <img
          alt="ahead-logo"
          src="/images/logo.webp"
          className="h-14 rounded-xl aspect-square	"
        />
      </span>
      <span className="flex justify-evenly items-center font-medium">
        {middleMenuList.map((item) => {
          return (
            <Link
              to={`/${item.link}`}
              key={item.id}
              className=" hidden lg:inline-block mx-6 capitalize text-secondaryFontColor"
            >
              {item.title}
            </Link>
          );
        })}
      </span>
      <span>
        <button className="rounded-full bg-black text-white py-3 px-5">
          Download app
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
