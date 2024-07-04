"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

const TopBarLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex h-full">
      <div className="relative">
        <button
          className={`text-black fixed left-1/2 transform -translate-x-1/2 z-50 font-bold transition-all duration-300 ${
            isOpen ? "top-12" : "top-4"
          }`}
          onClick={toggleBar}
        >
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className={`user-select-none text-xl ${
              isOpen ? "text-white" : "text-black"
            }`}
          />
        </button>
        <div
          className={`fixed top-0 left-0 w-full bg-gradient-to-transparent text-white transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } z-40`}
          style={{ height: "200px" }}
        >
          <div className="flex text-center justify-center font-bold pt-5">
            <h2 className="px-10">About</h2>
            <h2 className="px-10">Contact</h2>
          </div>
        </div>
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

export default TopBarLayout;
