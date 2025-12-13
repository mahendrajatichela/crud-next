"use client";
import { useEffect, useState } from "react";
import CustomButton from "../_components/cus-btn";
import InputField from "../_components/input-field";

interface FormState {
  firstName: string;
  lastName: string;
  age: string;
}

export default function SimpleForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const setValue = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (isDisabledSubmit()) {
      return;
    }
    console.log("Form submitted:", form);
  };

  const isDisabledSubmit = () => {
    if (form.firstName === "" || form.lastName === "" || form.age === "") {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col items-center w-full p-5">
      <h2>Simple Form</h2>
      <div className="w-150 space-y-5">
        <InputField
          placeholder="First name"
          value={form.firstName}
          onChange={(val) => setValue("firstName", val)}
        />
        <InputField
          placeholder="Last name"
          value={form.lastName}
          onChange={(val) => setValue("lastName", val)}
        />
        <InputField
          placeholder="Age"
          value={form.age}
          onChange={(val) => setValue("age", val)}
          numberOnly
        />

        <CustomButton disabled={isDisabledSubmit()} onClick={handleSubmit}>
          Submit
        </CustomButton>
      </div>
    </div>
  );
}
