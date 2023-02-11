import axios from "axios";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [showSuccess]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://your-api-endpoint.com/send-message", formData)
      .then(() => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setShowSuccess(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto mt-5 p-5 bg-white rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Full Name:
          </label>
          <input
            className="w-full border border-gray-400 rounded-md p-2 outline-none"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-full border border-gray-400 rounded-md p-2 outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="w-full border border-gray-400 rounded-md p-2 outline-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <button className="bg-soft-blue text-white rounded-md py-2 px-4 hover:bg-medium-blue">
          Send message
        </button>
      </form>
      {showSuccess && (
        <div className="fixed bottom-0 right-0 mb-6 mr-6 p-3 bg-green-500 text-white rounded-md">
          Successful message delivery!
        </div>
      )}
    </>
  );
};

export default ContactForm;
