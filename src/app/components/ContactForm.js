"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const sendEmail = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="w-full h-full md:pr-5">
      <form
        onSubmit={sendEmail}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
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
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="font-bold text-gray-900 py-2 transition-transform duration-10 transform hover:scale-110"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
