"use client";

import { HTMLInputTypeAttribute, useEffect, useState } from "react";

interface IFormInputProps<T = string> {
  name: string;
  type: HTMLInputTypeAttribute;
  value: T;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  name,
  type = "text",
  value,
  onChange,
  onKeyUp,
}: IFormInputProps) {
  const [isTargeted, setIsTargeted] = useState(false);

  const handleFocus = () => {
    setIsTargeted(true);
  };

  const handleBlur = () => {
    if (value.trim().length === 0) {
      setIsTargeted(false);
      return;
    } else {
      setIsTargeted(true);
    }

    onKeyUp?.();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-medium relative">
        <p
          className="bg-primary3 px-1.5"
          style={{
            position: "absolute",
            top: isTargeted ? "0" : "50%",
            left: "10px",
            transform: "translateY(-50%)",
            fontSize: isTargeted ? "13px" : "16px",
            transitionDuration: "0.2s",
          }}
        >
          {name}
        </p>

        <input
          type={type}
          name={name}
          id={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          className="w-full px-4 py-3 border-b-[1px] focus:outline-none focus:ring-2
           focus:ring-white-500 focus:rounded-lg text-base focus:border-0 transition-none"
        />
      </label>
    </div>
  );
}
