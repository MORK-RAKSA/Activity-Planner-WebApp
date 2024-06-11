
import Ruler from "@/app/components/Atoms/ruler/ruler";
import CartLists from "@/app/components/Organisms/cart-lists";
import { questionSurveyOne } from "@/data/data";
import Link from "next/link";

export default function Question1() {
  const data = questionSurveyOne;
  return (
    <div className="w-full h-screen">
      <div className=" h-auto w-[90%] mx-auto relative">
        <div className=" absolute z-10  w-full h-auto flex flex-col gap-12 py-7">
          <div className="flex flex-col gap-5">
            <Ruler width="17%"/>
            <h1 className="text-3xl font-bold text-[#090A0A] text-center">
              Tell us your goal
            </h1>
            <p className="text-xl font-bold text-[#5532BA]">
              How often do you set daily goals or tasks to accomplish?
            </p>
          </div>
          <div>
            <Link href="question2"><CartLists data={data} /></Link>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#090A0A] text-center">
              Create brilliant learning pathways
            </h4>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-0 left-0 w-full h-40 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 blur-3xl"></div>
    </div>
  );
}
