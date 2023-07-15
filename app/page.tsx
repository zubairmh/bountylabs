import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { SiClockify, SiEthereum } from "react-icons/si";
import { GoClock } from "react-icons/go";
import {BiUser} from "react-icons/bi"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const mont = Montserrat({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });
export default function Home() {
  const limit = (str: string, length: number, end: string = "..."): string => {
    return str.length < length ? str : str.substring(0, length) + end;
  };
  return (
    <div className="flex flex-col min-h-screen bg-black text-white gap-2 p-5">
      <h1 className={`text-2xl ${mont.className}`}>Top Bounties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((e, i) => {
          return (
            <div
              className="bg-gray-900 border border-solid border-gray-800 hover:border-gray-700 transition delay-75 h-64  rounded-lg p-3 flex flex-col gap-1 cursor-pointer"
              key={i}
            >
              <h1 className={inter.className}>
                Develop a GPT-4 powered Telegram Chatbot
              </h1>
              <span className="text-gray-200 flex flex-row items-center gap-2 text-sm">
                <GoClock /> 2 weeks left from now
              </span>
              <p className="text-xs text-gray-400">
                Basic Task, Involves using the telegram.py wrapper to develop a
                bot that interacts with the OpenAI api. Must implement proper
                ratelimiting
              </p>
              <div className="grow" />
              <div className="flex flex-row">
                <div className="flex flex-row w-fit justify-center items-center gap-2 bg-green-500 rounded-full py-1 px-2">
                  <SiEthereum />
                  <span>0.3ETH</span>
                </div>
                <div className="grow" />
                <div className="bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-600 rounded-full aspect-square flex justify-center items-center p-[0.2rem]">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://github.com/zubairmh.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>ZM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className={`text-2xl ${mont.className}`}>Newest Bounties</h1>
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((e, i) => {
          return (
            <div
              className="bg-gray-900 border border-solid border-gray-800 hover:border-gray-700 transition delay-75 h-60 sm:h-48  rounded-lg p-3 flex flex-col gap-1 cursor-pointer"
              key={i}
            >
              <div className="flex flex-row w-fit justify-center items-center gap-2 text-green-500 rounded-full font-bold text-xl py-1">
                <SiEthereum />
                <span>0.3ETH</span>
              </div>
              <h1 className={inter.className}>
                Develop a GPT-4 powered Telegram Chatbot
              </h1>
              <span className="text-gray-200 flex flex-row items-center gap-2 text-sm">
                <GoClock /> 2 weeks left from now
              </span>
              <p className="text-xs text-gray-400">
                Basic Task, Involves using the telegram.py wrapper to develop a
                bot that interacts with the OpenAI api. Must implement proper
                ratelimiting
              </p>
              <div className="grow" />
              <div className="flex flex-row items-center gap-2 text-gray-400 text-sm font-sans">
                  <Avatar className="w-4 h-4 border border-solid">
                    <AvatarImage
                      src="https://github.com/zubairmh.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>ZM</AvatarFallback>
                  </Avatar>
                <span>DankCoder</span>
                <span>• 4 hours ago</span>
                <div className="grow"/>
                <div className="flex flex-row items-center gap-1">
                  <BiUser/><span>4 Applicants</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
