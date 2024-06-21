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
      className={`${nunito.className} bg-[#fefcf7] flex min-h-screen flex-row items-center justify-between px-[10%]`}
    >
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
    </main>
  );
}
