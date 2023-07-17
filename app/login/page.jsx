"use client"
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/metamask";
export default function Login() {
  const router = useRouter();
  const { account, connectWallet, error } = useContext(AppContext);
  useEffect(() => {
    if (account) {
      router.push("/");
    }
  }, [account]);
  return (
    <div className="flex flex-col bg-black min-h-screen items-center justify-center">
      <button onClick={connectWallet}>
        <img className="w-64 h-64" src="/metamask.svg" ></img>
      </button>
      <h1 className="text-3xl">Connect with metamask</h1>
    </div>
  );
}