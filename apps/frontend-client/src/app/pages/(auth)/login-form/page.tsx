import Image from "next/image";
import Link from "next/link";
import React from "react";
//import {Button} from "ms-ui-components";

export default function LoginForm() {
  return (
    <div className=" w-full h-auto">
      <div className=" w-[90%] h-screen mx-auto py-4">
        <div className=" text-right">
          <Link href="home" className=" text-purple300">
            Skip here
          </Link>
        </div>
        <div className=" relative flex flex-col items-center ">
          <Image width={400} height={400} src="/images/auth-img/login-form.png" alt="dd" />
          <p className=" absolute text-purple300 font-bold text-xl  bottom-1 text-center">
            Welcome back! Please log in to continue.
          </p>
        </div>
        <div className=" absolute bottom-12  w-[90%] mx-auto text-center flex flex-col gap-5">
          <button className=" bg-purple300  py-3 text-white font-medium rounded-full">Create account</button>
          <p>Have an account? <Link href="login" className=" text-purple300">Login</Link></p>
        </div>
        {/* <Button variant='outline' color='success'>Hello</Button> */}
      </div>
    </div>
  );
}
