import { PiButterflyFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BsCardList, BsBoxArrowRight } from "react-icons/bs";
import { LiaIdCardSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-3xl text-[#A3A3A3] p-4 flex flex-row lg:flex-col justify-between w-28 lg:min-h-screen">
      <div className="flex flex-row-reverse lg:flex-col justify-between items-center lg:gap-10  lg:min-h-[50%]">
        <ul className="lg:space-y-5 flex flex-row lg:flex-col items-center">
          <li className="text-[#4B3EFA] hidden lg:block">
            <PiButterflyFill />
          </li>
          <li className="p-3 lg:p-0">
            <button type="button">
              <AiOutlineSearch />
            </button>
          </li>
        </ul>
        <ul className="lg:space-y-2 flex flex-row lg:flex-col items-center gap-4">
          <li className="text-white p-4 bg-[#4036DA] rounded-lg">
            <Link>
              <GoHome />
            </Link>
          </li>
          <li className="p-3 lg:p-4 ">
            <Link>
              <LiaIdCardSolid />
            </Link>
          </li>
          <li className="p-3 lg:p-4">
            <Link>
              <BsCardList />
            </Link>
          </li>
          <li className="p-3 lg:p-4">
            <Link>
              <FaRegUser />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row absolute top-5 right-5 lg:relative lg:top-auto lg:right-auto lg:flex-col items-center lg:gap-6">
        <button className="relative">
          <IoMdNotificationsOutline />
          <span className="bg-[#88B0FC] w-2 h-2 rounded-full flex items-center absolute top-0 right-0"></span>
        </button>
        <span className="hidden lg:block">
          <Link>
            <BsBoxArrowRight />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
