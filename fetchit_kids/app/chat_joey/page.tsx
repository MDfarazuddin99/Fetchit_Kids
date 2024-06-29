"use client";
import Image from "next/image";
import { Nunito, Press_Start_2P } from "next/font/google";
import fetchit_logo from "../../public/fetchit.png";
import { Typewriter } from "nextjs-simple-typewriter";
import avatar1 from "../../public/av1.png";
import ChatInputForm from "../components/chat_ross/ChatInputForm";
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

const p2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <main
      className={`${nunito.className} SkyToNight flex flex-col items-center justify-between`}
    >
      {/* body Desktop*/}
      <div className="hidden md:flex flex-col w-[100%] items-center h-[100vh] mt-[2%]">
        <div className="">
          <div
            className={`Press_Start_2P bubble shadow mini bottom ${p2p.className}`}
          >
            <Typewriter
              words={["Hello! I am Ross"]}
              loop={2}
              // cursor
              // cursorStyle=""
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={2500}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </div>
          <div className=" bg-ross w-[300px] h-[300px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
            <Image
              className="hover:-rotate-180"
              src={avatar1}
              alt="Description of the image"
            ></Image>
          </div>
        </div>
        <ChatInputForm />
      </div>
      {/* body mobile */}
      <div className="md:hidden sm:flex flex-col w-[100%] items-center h-[100vh] justify-center"></div>

      {/* footer element */}
      <footer className="bg-[white] w-[100%]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center">
              <Image
                src={fetchit_logo}
                alt="Fetchit logo"
                width={50}
                height={50}
              />
              <span className="mt-[15px] font-inter font-bold text-[#3E4EA1] ml-1 text-[37px] leading-[50px] tracking-wider">
                Fetchit
              </span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-[#3E4EA1] sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Fetchit
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
