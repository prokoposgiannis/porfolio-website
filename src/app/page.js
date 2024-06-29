"use client";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

import MainBody from "@/app/components/MainBody";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
        <MainBody />
      </div>
    </div>
  );
}
