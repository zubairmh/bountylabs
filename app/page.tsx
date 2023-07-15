import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
const mont=Montserrat({weight:"700", subsets:["latin"]})
const inter=Inter({weight:"500", subsets:["latin"]})
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white gap-2 p-5">
      <h1 className={`text-2xl ${mont.className}`}>Top Bounties</h1>
      <div className="grid grid-cols-3 gap-6">
        {[...Array(3)].map((e, i) => {
          return (
            <div className="bg-gray-600 h-64 rounded-lg p-3" key={i}>
              <h1 className={inter.className}>Develop a rust implementation of LXML</h1>
            </div>
          );
        })}
      </div>

      <h1 className={`text-2xl ${mont.className}`}>Newest Bounties</h1>
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((e, i) => {
          return (
            <div className="bg-gray-600" key={i}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}
