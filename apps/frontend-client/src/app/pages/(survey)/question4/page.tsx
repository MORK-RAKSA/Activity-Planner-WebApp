import Ruler from "@/app/components/Atoms/ruler/ruler";
import CartLists from "@/app/components/Organisms/cart-lists";
import { questionSurveyFour } from "@/data/data";
import Link from "next/link";

export default function Question4() {
    const data = questionSurveyFour;
    return (
      <div className="w-full h-screen">
        <div className=" h-auto w-[90%] mx-auto relative">
          <div className=" absolute z-10  w-full h-auto flex flex-col gap-12 py-7">
            <div className="flex flex-col gap-5">
              <Ruler width="68%"/>
              <h1 className="text-3xl font-bold text-[#090A0A] text-center">
                Tell us your goal
              </h1>
              <p className="text-xl font-bold text-[#5532BA]">
              What time of day do you feel most productive?
              </p>
            </div>
            <div>
              <Link href="question5"><CartLists data={data} /></Link>
            </div>
          </div>
        </div>
        <div className=" fixed bottom-0 left-0 w-full h-40 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 blur-3xl"></div>
      </div>
    );
  }