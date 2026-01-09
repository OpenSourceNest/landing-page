"use client";

import { useState } from "react";
import FormInput from "./FormInput";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const SUPPORT_EMAIL = "info@opensourcenest.org";

  const checkFormValidity = () => {
    if (name.trim().length === 0) {
      setFormError("Name cannot be empty.");
      return;
    }

    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (message.trim().length === 0) {
      setFormError("Message cannot be empty.");
      return;
    }

    return setFormError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const encodedEmail = encodeURIComponent(SUPPORT_EMAIL);
    const encodedMessage = encodeURIComponent(message);
    const encodedSubject = encodeURIComponent(`Contact from ${name}`);
    const mailtoLink = `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedMessage}`;

    checkFormValidity();

    setFormError("");
    setEmail("");
    setMessage("");
    setName("");
    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      className="bg-primary3 py-[80px] px-[60px] rounded-[20px] w-full max-w-[790px]
    max-[1100px]:px-[30px] max-[1100px]:py-[50px] "
    >
      <h2 className="font-semibold text-[50px]/[60px] max-[1100px]:text-[39px]/[44px]">
        Do you have any Question? <br /> Feel free to ask.
      </h2>

      <p className="font-medium text-[18px]/[24px] mt-2.5 mb-[20px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        cupiditate praesentium pariatur, quo aspernatur id.
      </p>

      <div className="h-[28px]">
        {formError ? (
          <p className="text-base bg-[#e93d3dd3] px-2 py-0.5 w-fit rounded-sm">
            {formError}
          </p>
        ) : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[30px] mt-[15px]"
      >
        <FormInput
          name="Your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={checkFormValidity}
        />

        <FormInput
          name="johndoe@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyUp={checkFormValidity}
        />

        <FormInput
          name="What should we know?"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={checkFormValidity}
        />

        <button
          type="submit"
          className="bg-black text-white text-[20px] font-semibold p-4
           rounded-full w-full mt-[80px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
