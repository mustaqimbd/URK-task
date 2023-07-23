import React from "react";
import StackBarChart from "./components/StackBarChart";
import CircularProgressBar from "./components/CircularProgressBar";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineCheck } from "react-icons/ai";
import RangeSlider from "./components/RangeSlider";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-10 lg:my-10 lg:mr-5">
      <div className="space-y-10">
        <div className="flex gap-5 items-center">
          <div>
            <img
              className="w-16 h-16 rounded-full"
              src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1689871849~exp=1689872449~hmac=55d1acbd856fc36509af8811995a4bc3ada81561eb67cbb9c1078fc7b640f1f1"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Hi Mike,</h1>
            <p>Welcome Back</p>
          </div>
        </div>
        <div className="flex flex-col gap-14 ml-8 lg:ml-3 mr-8 lg:mr-0">
          <div className="space-y-4">
            <div>
              <h1 className="text-xl font-bold">Today</h1>
              <h1 className="text-3xl font-extrabold">$19,892</h1>
              <span className="text-[#A3A3A3]">Account Balance</span>
            </div>
            <div className="flex flex-row lg:flex-col gap-10">
              <div>
                <h1 className="text-xl font-bold">$4000</h1>
                <p className="text-[#A3A3A3]">
                  Year-to-Date{" "}
                  <span className="hidden lg:inline-block">Contribute</span>
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold">$1,892</h1>
                <span className="text-[#A3A3A3]">Total Interest</span>
              </div>
            </div>

            <div>
              <button className="text-white px-5 py-2 bg-[#4B3EFA] items-center rounded-lg relative w-full">
                <select className="bg-[#4B3EFA] items-center pr-3 focus:outline-none appearance-none">
                  <option value="">I want to </option>
                  <option value="">Withdraw</option>
                </select>
                <span className="text-xs absolute top-[50%] -ml-3 -translate-y-[50%] pointer-events-none hidden lg:inline-block">
                  ▼
                </span>
                <span className="absolute top-[50%] -ml-5 -translate-y-[50%] pointer-events-none lg:hidden">
                  ...
                </span>
              </button>
            </div>
          </div>
          <ul className="space-y-8">
            <li className="text-xl font-bold">Recent Transactions</li>
            <li>
              <p>20-08-07</p>
              <h2 className="text-md font-bold">
                Withdrawal Transfer to Bank-xxx11
              </h2>
            </li>
            <li>
              <p>20-08-21</p>
              <h2 className="text-md font-bold">
                Withdrawal Transfer to Bank-xxx11
              </h2>
            </li>
            <li>
              <p>20-08-16</p>
              <h2 className="text-md font-bold">
                Withdrawal Transfer to Bank-xxx11
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 space-y-10">
        <div>
          <p className="text-[#584AFA] mt-10 lg:mt-0">Retirement income</p>
          <h1 className="text-2xl">Starting Year 2056</h1>
        </div>
        <div className="lg:grid lg:grid-cols-6 lg:gap-6 space-y-5 lg:space-y-0">
          <div className="space-y-3 col-span-2">
            <h1 className="text-2xl font-bold">$300,000</h1>
            <p>My Goal</p>
            <hr className=" border-[#6356FA]" />
          </div>
          <div className="grid grid-cols-2 gap-5 col-span-4">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">59%</h1>
              <p>Goal Achieved</p>
              <hr className="border-[#6356FA]" />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">$300</h1>
              <p>Est. Monthly Income</p>
              <hr className="border-[#6356FA]" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="text-xl font-bold">Contribution Overtime</h1>
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-[18px]">
              <span className="w-4 h-2 bg-[#0E0F9F] flex flex-col lg:flex-row items-center lg:justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium text-sm">
                Employer:
              </span>
              <span className="font-bold text-sm">K 73,500</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-[18px]">
              <span className="w-4 h-2 bg-[#4B3EFA] flex items-center justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium text-sm">
                Employee:
              </span>
              <span className="font-bold text-sm">K 52,500</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-[18px]">
              <span className="w-4 h-2 bg-[#88B0FC] flex items-center justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium text-sm">
                Total Interest:
              </span>
              <span className="font-bold text-sm">K 244,313</span>
            </div>
          </div>
          <div className="relative">
            <StackBarChart />
            <span className="text-white bg-[#37D5AC] lg:p-1 p-[1px] rounded-full absolute top-5 -right-3  lg:-right-4">
              <AiOutlineCheck />
            </span>
          </div>
        </div>
        <div className="space-y-8">
          <div className="relative">
            <span className="absolute -top-7 right-3 lg:hidden">X</span>
            <h1 className="text-xl font-bold">How do I compare to my peers?</h1>
            <p>These number represent current goal achievement</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="space-y-3 lg:space-y-5">
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#545454]">Age:</span>
                <div className="text-[#7B7B7B] font-medium items-center relative">
                  <select className=" items-center pr-4 focus:outline-none appearance-none">
                    <option value="">Under 30</option>
                  </select>
                  <span className="text-xs absolute -ml-3 top-[50%] -translate-y-[50%] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#545454]">Salary:</span>
                <div className="text-[#7B7B7B] font-medium items-center relative">
                  <select className=" items-center pr-4 focus:outline-none appearance-none">
                    <option value="">K 20 - K 30</option>
                  </select>
                  <span className="text-xs absolute top-[50%] -ml-3 -translate-y-[50%] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#545454]">Gender:</span>
                <div className="text-[#7B7B7B] font-medium items-center relative">
                  <select className="items-center pr-4 focus:outline-none appearance-none">
                    <option value="">Male</option>
                  </select>
                  <span className="text-xs absolute top-[50%] -ml-3 -translate-y-[50%] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2 flex justify-between items-center font-bold">
              <div>
                <CircularProgressBar
                  percentage={78}
                  strokeWidth={10}
                  trailColor="#D4F7EE"
                  pathColor="#37D5AC"
                  textColor="#313131"
                />
                <p className="text-center font-bold text-[#545454]">Average</p>
              </div>
              <div>
                <CircularProgressBar
                  percentage={95}
                  strokeWidth={10}
                  trailColor="#D4F7EE"
                  pathColor="#37D5AC"
                  textColor="#313131"
                />
                <p className="text-center font-bold text-[#545454]">Top</p>
              </div>
              <div>
                <CircularProgressBar
                  percentage={59}
                  strokeWidth={10}
                  trailColor="#D4F7EE"
                  pathColor="#37D5AC"
                  textColor="#313131"
                />
                <p className="text-center font-bold text-[#545454]">Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <h1 className="text-xl font-bold mt-10 lg:mt-0">Retirement Strategy</h1>
        <div className="font-bold space-y-5">
          <p>Employee Contribution</p>
          <div className="flex items-center gap-4">
            <RangeSlider max={25} value={12} />
            <span>12%</span>
          </div>
          <p>Retirement Age</p>
          <div className="flex items-center gap-4">
            <RangeSlider max={100} value={65} />
            <span>65</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>Employer Contribution</p>
            <span>8.4%</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Interest Rate</p>
            <span>5%</span>
          </div>
          <button className="bg-[#4B3EFA] text-white py-4 w-full rounded-lg font-medium">
            Update
          </button>
          <div className="flex items-center justify-center text-[#7163F8] font-bold">
            <Link className="flex items-center gap-1">
              <span>View Help Docs</span> <AiOutlineRight className="text-sm" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="w-[1px] h-[150px] bg-[#0E0F9F] flex items-center justify-center rounded-full"></span>
          <div className="space-y-2">
            <h1 className="text-lg">
              Are you considering{" "}
              <span className="font-bold">Housing Advance?</span>
            </h1>
            <p>Limited time reduced interest</p>
            <div className="flex items-center text-[#7163F8]">
              <Link className="flex items-center gap-1 font-bold">
                <span>Learn More</span> <AiOutlineRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
