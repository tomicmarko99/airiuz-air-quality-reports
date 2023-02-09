import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="w-full bg-white text-very-dark-grey px-5 py-16 pt-28 flex flex-col items-center">
      <div className="w-full max-w-[720px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
