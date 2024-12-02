"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import ProfilePic from "@/app/assests/pictures/Picture.png"

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-fixed big-cover  bg-center custom-image ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <span className="text-5xl"><Typewriter
              options={{
                strings: ["Muhammad Hassan Jawaid", ""],
                autoStart: true,
                loop: true,
              }}
            /></span>
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700 mb-4"></div>
          
          <div className="flex justify-center">
            <Link href={'#Contact'}>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact
            </button></Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
  className="object-cover object-center rounded mx-auto w-[25rem]"
  alt="hero"
  width={500}
  height={500}
  src={ProfilePic} 
/>

        </div>
      </div>
    </section>
  );
}
