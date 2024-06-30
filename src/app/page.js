"use client";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

import MainBody from "@/app/components/MainBody";

export default function Home() {
  return (
    <div className="flex h-full">
        <MainBody />
    </div>
  );
}
