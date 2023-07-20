import React from "react";

const Home = () => {
  return (
    <div>
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
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
