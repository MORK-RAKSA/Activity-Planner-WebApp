import Ruler from "@/app/components/Atoms/ruler/ruler";
import React from "react";

export default function HomePage() {
  return (
    <div className=" w-full h-screen">
      <h1 className=" text-center text-2xl font-semibold">Welcome to my app!!!</h1>
      <div>
      <h1>Progress Bar</h1>
      <Ruler width="50%" color="purple" />
      <Ruler width="75%" color="warning" />
      <Ruler width="90%" color="success" className="my-custom-class" />
    </div>
      <div className=" absolute bottom-0 left-0 w-full h-48 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 blur-3xl">
      </div>
    </div>
  );
}
