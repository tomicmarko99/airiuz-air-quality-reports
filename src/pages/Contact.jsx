import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="w-full bg-white text-very-dark-grey px-5 py-16 pt-28 flex flex-col items-center">
      <div className="w-full max-w-[720px]">
        <div className="w-full text-center">
          <div className="text-[24px] md:text-[40px] font-semibold">
            Contact Us
          </div>
          <div className="text-[18px] md:text-[22px] text-soft-blue">
            Get in touch with us and send us your inquiries or feedback.
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
