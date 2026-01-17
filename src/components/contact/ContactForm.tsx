"use client";

import { useEffect, useState } from "react";
import FormInput from "./FormInput";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const SUPPORT_EMAIL = "info@opensourcenest.org";

  const checkFormValidity = () => {
    if (name.trim().length === 0) {
      setFormError("Name should not be empty.");
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    if (message.trim().length === 0) {
      setFormError("Message should not be empty.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const encodedEmail = encodeURIComponent(SUPPORT_EMAIL);
    const encodedMessage = encodeURIComponent(message);
    const encodedSubject = encodeURIComponent(`Contact from ${name}`);
    const mailtoLink = `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedMessage}`;

    if (checkFormValidity()) {
      window.open(mailtoLink, "_blank");
    }
  };

  useEffect(() => {
    return () => {
      setFormError("");
    };
  }, [name, email, message]);

  return (
    <div
      className="bg-primary3 py-[80px] px-[60px] rounded-[20px] w-full max-w-[790px]
    max-[1100px]:px-[30px] max-[1100px]:py-[50px] "
    >
      <h2 className="font-semibold text-[50px]/[60px] max-[1100px]:text-[39px]/[44px]">
        Do you have any Question? <br /> Feel free to ask.
      </h2>

      <p className="font-medium text-[18px]/[24px] mt-2.5 mb-[20px]">
        Whether you’re curious about our programs, want to collaborate, or just
        say hello, reach out to us. OpenSourceNest is built with and for the
        community.
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
        />

        <FormInput
          name="johndoe@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          name="What should we know?"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
