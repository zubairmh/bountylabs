import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Brand from "@/public/brand.svg";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {SiEthereum} from "react-icons/si"
const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});
export default function Navbar() {
  return (
    <div className="h-14 p-2 flex flex-row items-center">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="h-8 w-8"
          height={128}
          width={128}
          alt="brand"
          src={Brand}
        />
        <span className={`text-xl ${inter.className}`}>BountyLabs</span>
      </div>

      <div className="grow" />
      <div className="flex flex-row items-center gap-2">
        <Button className="flex flex-row gap-1"><SiEthereum size={16}/> <span className={inter.className}>Submit bounty</span></Button>
        <div className="bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-600 rounded-full aspect-square flex justify-center items-center p-[0.2rem]">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/zubairmh.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
