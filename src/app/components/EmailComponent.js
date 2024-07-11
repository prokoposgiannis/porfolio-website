"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EmailComponent() {
  const handleClick = () => {
    window.location.href = "mailto:giannisprokopos@gmail.com";
  };

  return (
    <>
      <div onClick={handleClick}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={
            "user-select-none text-3xl px-4 text-gray-600 transition-transform duration-50 transform hover:scale-125 hover:text-gray-900"
          }
        />
      </div>
    </>
  );
}
