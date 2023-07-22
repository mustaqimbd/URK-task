import React from "react";
import StackBarChart from "./components/StackBarChart";
import CircularProgressBar from "./components/CircularProgressBar";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
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
        <div className="flex flex-col gap-14 ml-3">
          <ul className="space-y-4">
            <li className="text-xl font-bold">Today</li>
            <li>
              <h1 className="text-3xl font-extrabold">$19,892</h1>
              <span className="text-[#A3A3A3]">Account Balance</span>
            </li>
            <li>
              <h1 className="text-xl font-bold">$4000</h1>
              <span className="text-[#A3A3A3]">Year-to-Date Contributions</span>
            </li>
            <li>
              <h1 className="text-xl font-bold">$1,892</h1>
              <span className="text-[#A3A3A3]">Total Interest</span>
            </li>

            <li>
              <button className="text-white px-5 py-2 bg-[#4B3EFA] items-center rounded-lg relative">
                <select className="bg-[#4B3EFA] items-center pr-3 focus:outline-none appearance-none">
                  <option value="">I want to</option>
                  <option value="">Withdraw</option>
                </select>
                <span className="text-xs absolute top-[50%] right-5 -translate-y-[50%] pointer-events-none">
                  ▼
                </span>
              </button>
            </li>
          </ul>
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
          <p className="text-[#6356FA]">Retirement income</p>
          <h1 className="text-2xl">Starting Year 2056</h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">$300,000</h1>
            <p>My Goal</p>
            <hr className=" border-[#6356FA]" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">59%</h1>
            <p>Goal Achieved</p>
            <hr className=" border-[#6356FA]" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">$300</h1>
            <p>Est. Monthly Income</p>
            <hr className=" border-[#6356FA]" />
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="text-xl font-bold">Contribution Overtime</h1>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-2 text-[18px]">
              <span className="w-5 h-3 bg-[#0E0F9F] flex items-center justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium">Employer:</span>
              <span className="font-bold">K 73,500</span>
            </div>
            <div className="flex items-center gap-4 text-[18px]">
              <span className="w-5 h-3 bg-[#4B3EFA] flex items-center justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium">Employee:</span>
              <span className="font-bold">K 52,500</span>
            </div>
            <div className="flex items-center gap-4 text-[18px]">
              <span className="w-5 h-3 bg-[#88B0FC] flex items-center justify-center rounded-full"></span>
              <span className="text-[#afafaf] font-medium">Total Interest:</span>
              <span className="font-bold">K 244,313</span>
            </div>
          </div>
          <StackBarChart />
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-xl font-bold">How do I compare to my peers?</h1>
            <p>These number represent current goal achievement</p>
          </div>
          <div className="grid grid-cols-3 gap-10 items-center">
            <div className="space-y-5">
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
      <div></div>
    </div>
  );
};

export default Home;
