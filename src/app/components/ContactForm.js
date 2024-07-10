"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [modalMessage, setModalMessage] = useState("Submit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.message === "") {
      setIsFieldEmpty(true);
      if (formData.email === "") {
        emailRef.current.focus();
      }
      return;
    } else {
      setIsFieldEmpty(false);
      setModalMessage("Sending..");
      sendEmail();
    }
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // For later logging use
      // const result = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setModalMessage("Sent!");
        setSent(true);
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      // For later logging use
      // return "Error sending email:", error;
      setModalMessage(
        "Something went wrong. Please contact giannisprokopos@gmail.com"
      );
    }
  };

  return (
    <div className="w-full h-full md:pr-5">
      <form
        onSubmit={handleSubmit}
        className="h-fit w-full mx-auto p-4 bg-gray-100 shadow-xl rounded-xl"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-900 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-900 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={isFieldEmpty ? "REQUIRED" : ""}
            value={formData.email}
            onChange={handleChange}
            ref={emailRef}
            className={`w-full px-3 py-2 border ${
              isFieldEmpty ? "border-red-800" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-900 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={isFieldEmpty ? "REQUIRED" : ""}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              isFieldEmpty ? "border-red-800" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="font-bold text-gray-900 py-2 transition-transform duration-10 transform hover:scale-110"
          >
            {modalMessage}
          </button>
        </div>
      </form>
    </div>
  );
}
