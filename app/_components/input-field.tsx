"use client";
import React from "react";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  name?: string;

  /** number only config */
  numberOnly?: boolean;
  decimal?: boolean;
}

const numberOnly = (value: string) => value.replace(/\D+/g, "");

const numberOnlyDecimal = (value: string) =>
  value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

export default function InputField({
  type = "text",
  placeholder = "Placeholder...",
  className = "",
  value,
  onChange,
  error,
  name,
  numberOnly: isNumberOnly,
  decimal,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (isNumberOnly) {
      val = decimal ? numberOnlyDecimal(val) : numberOnly(val);
    }

    onChange?.(val);
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${className} border border-gray-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:border-blue-500`}
        onChange={handleChange}
      />

      {error && (
        <span className="text-red-500 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
}
