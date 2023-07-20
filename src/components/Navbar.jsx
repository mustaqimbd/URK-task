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
    <div className="text-3xl text-[#A3A3A3] p-4 flex flex-col justify-between w-28 min-h-screen">
      <div className="flex flex-col justify-between items-center gap-10  min-h-[50%]">
        <ul className="space-y-5">
          <li className="text-[#4B3EFA]">
            <PiButterflyFill />
          </li>
          <li>
            <button type="button">
              <AiOutlineSearch />
            </button>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="text-white  p-4 bg-[#4036DA] rounded-lg">
            <Link>
              <GoHome />
            </Link>
          </li>
          <li className="p-4 ">
            <Link>
              <LiaIdCardSolid />
            </Link>
          </li>
          <li className="p-4">
            <Link>
              <BsCardList />
            </Link>
          </li>
          <li className="p-4">
            <Link>
              <FaRegUser />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6">
        <button>
          <IoMdNotificationsOutline />
        </button>
        <span>
          <Link>
            <BsBoxArrowRight />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
