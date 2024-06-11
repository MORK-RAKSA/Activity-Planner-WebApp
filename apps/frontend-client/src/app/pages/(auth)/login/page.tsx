import React from "react";
export default function page() {
  return (
    <div className=" relative w-full h-screen flex flex-col items-center overflow-hidden">
      <div className=" absolute top-0 w-full h-[60%]">
        <img
          src="/images/auth-img/login.png"
          className=" w-full h-full"
          alt=""
        />
      </div>
      <div className="absolute w-[280%]  h-[580px] bg-white rounded-t-full top-[50%] flex flex-col items-center">
        <div className=" flex items-center gap-1">
          <div className=" flex flex-col items-center">
            <p className=" text-purple900 font-bold text-xl">Welcome!</p>
            <div className=" w-16 h-1 bg-purple900 rounded-full"></div>
          </div>
          to the world of
        </div>
        <p className=" border-b-4 border-blue-400">samurai</p>

      </div>
    </div>
  );
}
