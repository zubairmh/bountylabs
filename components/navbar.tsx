import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Brand from "@/public/brand.svg";
import { Inter } from "next/font/google";

import Link from "next/link";
import AddBounty from "@/components/addbounty";
const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});
export default function Navbar() {
  return (
    <div className="h-16 p-3 flex flex-row items-center border-solid border-b-[1px] border-gray-800 bg-gray-950">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image
          className="h-8 w-8"
          height={128}
          width={128}
          alt="brand"
          src={Brand}
        />
        <span className={`text-xl ${inter.className}`}>BountyLabs</span>
      </Link>

      <div className="grow" />
      <div className="flex flex-row items-center gap-4">
        <AddBounty/>
        <div className="bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-600 rounded-full aspect-square flex justify-center items-center p-[0.2rem]">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/zubairmh.png" alt="@shadcn" />
            <AvatarFallback>ZM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
