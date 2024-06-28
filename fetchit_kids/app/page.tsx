"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { Nunito, Press_Start_2P } from "next/font/google";
import avatar1 from "../public/av1.png";
import avatar2 from "../public/av2.png";
import avatar3 from "../public/av3.png";
import sun from "../public/sun.png";
import moon from "../public/moon.png";
import fetchit_logo from "../public/fetchit.png";
import { Typewriter } from "nextjs-simple-typewriter";
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

const p2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  
  const handleButtonClick = (route : string) => {
    router.push(route);
  };

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
      <div className="hidden md:flex flex-col w-[100%] items-center justify-center h-[100vh]">
        <div className="flex flex-row items-center w-[100%] justify-between px-[4%]">
          <div id="cloud"></div>

          <div className="tilted-image-container-1">
            <Image
              src={sun}
              alt="Tilted Star"
              layout="fill"
              objectFit="contain"
              className="tilted-image"
            />
          </div>
          <div className="flex-grow flex justify-center items-center">
            <div className="inline-block rounded-full text-white bg-[#818cf8] p-3">
              <p className="font-extrabold text-3xl">
                Learn Something New Everyday
              </p>
            </div>
          </div>
          <div className="tilted-image-container-2">
            <Image
              src={moon}
              alt="Tilted Star"
              layout="fill"
              objectFit="contain"
              className="tilted-image"
            />
          </div>
          <div id="cloud"></div>
        </div>
        <div className="flex flex-row items-center w-[100%] ">
          {/* <div id="cloud"></div> */}
          <div className="inline-block rounded-full text-white bg-[#4ade80] p-5 mb-4 mx-auto">
            <p className="font-extrabold text-3xl">Meet your guides</p>
          </div>

          {/* <div id="cloud"></div> */}
        </div>

        <div className="flex justify-center space-x-40 w-[70%] mt-[10px]">
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
            <div className=" bg-[#b45309] w-[300px] h-[300px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
              <Image
                className="hover:-rotate-180"
                src={avatar1}
                alt="Description of the image"
              ></Image>
            </div>
            <div className="flex items-center justify-center text-2xl font-extrabold mt-2">
              <button onClick={() => handleButtonClick('/chat_ross')} className="flex items-center justify-center text-2xl font-extrabold bg-[#b45309] rounded-full mt-2 p-2 text-white">
                Click To chat
              </button>
            </div>
          </div>
          <div className="">
            <div
              className={`Press_Start_2P bubble shadow mini bottom ${p2p.className}`}
            >
              <Typewriter
                words={["Hello! I am Joey"]}
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
            <div className="flex bg-[#4ade80] w-[300px] h-[300px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
              <Image
                className="hover:-rotate-180"
                src={avatar2}
                alt="Description of the image"
              ></Image>
            </div>
            <div className="flex items-center justify-center text-2xl font-extrabold mt-2">
              <button onClick={() => handleButtonClick('/chat_joey')} className="flex items-center justify-center text-2xl font-extrabold bg-[#4ade80] rounded-full mt-2 p-2 text-white">
                Click To chat
              </button>
            </div>
          </div>
          <div className="">
            <div
              className={`Press_Start_2P bubble shadow mini bottom ${p2p.className} `}
            >
              <Typewriter
                words={["Hello! I am Chandler"]}
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
            <div className="bg-[#818cf8] w-[300px] h-[300px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
              <Image
                className="hover:-rotate-180"
                src={avatar3}
                alt="Description of the image"
              ></Image>
            </div>
            <div className="flex items-center justify-center text-2xl font-extrabold mt-2">
              <button onClick={() => handleButtonClick('/chat_chandler')} className="flex items-center justify-center text-2xl font-extrabold bg-[#818cf8] rounded-full mt-2 p-2 text-white">
                Click To chat
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* body mobile */}
      <div className="md:hidden sm:flex flex-col w-[100%] items-center h-[100vh] justify-center">
        <div className="flex flex-row items-center justify-center w-[100%] px-[3%]">
          <div className="tilted-image-container-1">
            <Image
              src={sun}
              alt="Tilted Star"
              layout="fill"
              objectFit="contain"
              className="tilted-image"
            />
          </div>

          <div className="tilted-image-container-2">
            <Image
              src={moon}
              alt="Tilted Star"
              layout="fill"
              objectFit="contain"
              className="tilted-image"
            />
          </div>
        </div>

        {/* Centered div */}
        <div className="flex-col flex justify-center items-center">
          <div className="inline-block rounded-full text-white bg-[#818cf8] p-3">
            <p className="font-extrabold text-1xl">
              Learn Something New Everyday
            </p>
          </div>
          <div className="inline-block rounded-full text-white bg-[#4ade80] p-3 mt-[2%]">
            <p className="font-extrabold text-1xl">Meet your Guides</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div
            className={`Press_Start_2P bubble shadow  bottom ${p2p.className}`}
          >
            <Typewriter
              words={["Hello! I am Joey"]}
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
          <div className="flex bg-[#4ade80] w-[150px] h-[150px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
            <Image
              className="hover:-rotate-180"
              src={avatar2}
              alt="Description of the image"
            ></Image>
          </div>
        </div>
        <div className="flex items-center justify-center text-base font-extrabold mt-2">
          <button onClick={() => handleButtonClick('/chat_ross')} className="flex items-center justify-center text-base font-extrabold bg-[#4ade80] rounded-full mt-2 p-2 text-white">
            Click To chat
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-[100%] justify-between px-[5%]">
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

            <div className=" bg-[#b45309] w-[150px] h-[150px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
              <Image
                className="hover:-rotate-180"
                src={avatar1}
                alt="Description of the image"
              ></Image>
            </div>
            <div className="flex items-center justify-center text-base font-extrabold mt-2">
              <button onClick={() => handleButtonClick('/chat_joey')} className="flex items-center justify-center text-base font-extrabold bg-[#b45309] rounded-full mt-2 p-2 text-white">
                Click To chat
              </button>
            </div>
          </div>
          <div className="">
            <div
              className={`Press_Start_2P bubble shadow mini bottom ${p2p.className}`}
            >
              <Typewriter
                words={["Hello! I am Chandler"]}
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
            <div>
              <div className="bg-[#818cf8] w-[150px] h-[150px] rounded-full transition-transform transform hover:rotate-180 hover:scale-125">
                <Image
                  className="hover:-rotate-180"
                  src={avatar3}
                  alt="Description of the image"
                ></Image>
              </div>
              <div className="flex items-center justify-center text-base font-extrabold mt-2">
                <button onClick={() => handleButtonClick('/chat_chandler')} className="flex items-center justify-center text-base font-extrabold bg-[#818cf8] rounded-full mt-2 p-2 text-white">
                  Click To chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
