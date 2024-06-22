import Image from "next/image";
import { Nunito } from "next/font/google";
import avatar1 from "../public/av1.png";
import avatar2 from "../public/av2.png";
import avatar3 from "../public/av3.png";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${nunito.className} bg-[#fefcf7] min-h-screen flex flex-col items-center py-[3%]`}
    >
      <div className="inline-block rounded-full text-white bg-[#818cf8] p-5 mr-[30%]">
        <p className="font-extrabold text-5xl">Learn Something New Everyday</p>
      </div>

      <div className="inline-block rounded-full text-white bg-[#b45309] p-5 my-5 ml-[50%]">
        <p className="font-extrabold text-5xl">Grow Everyday</p>
      </div>

      <div className="inline-block rounded-full text-white bg-[#4ade80] p-5 my-5 mr-[60%]">
        <p className="font-extrabold text-5xl">Meet your guides</p>
      </div>

      <div className="flex justify-center space-x-40 w-[70%]">
        <div className="">
          <div className="bg-[#b45309] w-[300px] h-[300px] rounded-full transition-transform transform hover:scale-110">
            <Image src={avatar1}></Image>
          </div>
          <div className="flex items-center justify-center text-4xl font-extrabold">
            Ross
          </div>
        </div>
        <div className="">
          <div className="bg-[#4ade80] w-[300px] h-[300px] rounded-full transition-transform transform hover:scale-110">
            <Image src={avatar2}></Image>
          </div>
          <div className="flex items-center justify-center text-4xl font-extrabold">
            Joey
          </div>
        </div>
        <div className="">
          <div className="bg-[#818cf8] w-[300px] h-[300px] rounded-full transition-transform transform hover:scale-110">
            <Image src={avatar3}></Image>
          </div>
          <div className="flex items-center justify-center text-4xl font-extrabold">
            Chandler
          </div>
        </div>
      </div>
    </main>
  );
}
