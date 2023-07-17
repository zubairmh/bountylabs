import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
const inter = Inter({ weight: "400", subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import AppProvider from "@/context/metamask";
export const metadata: Metadata = {
  title: "BountyLabs",
  description: "The web3 bounty platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-black text-white`}
      >
        <AppProvider>
          <Navbar />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
