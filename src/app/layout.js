"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import MobileHeader from "@/app/components/MobileHeader";
import { useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "john prokopos",
//   description: "porfolio website",
// };

export default function RootLayout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-200">
          <div>
            <h1>SideBar</h1>
          </div>
          <div className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
            <MobileHeader
              sideBarOpen={sideBarOpen}
              setSideBarOpen={setSideBarOpen}
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
