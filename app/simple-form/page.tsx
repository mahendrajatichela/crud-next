// "use client";
// import { useEffect, useState } from "react";
// import CustomButton from "../_components/cus-btn";
// import InputField from "../_components/input-field";

// interface FormState {
//   firstName: string;
//   lastName: string;
//   age: string;
// }

// export default function SimpleForm() {
//   const [form, setForm] = useState<FormState>({
//     firstName: "",
//     lastName: "",
//     age: "",
//   });

//   const setValue = (key: keyof FormState, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = () => {
//     if (isDisabledSubmit()) {
//       return;
//     }
//     console.log("Form submitted:", form);
//   };

//   const isDisabledSubmit = () => {
//     if (form.firstName === "" || form.lastName === "" || form.age === "") {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <div className="flex flex-col items-center w-full p-5">
//       <h2>Simple Form</h2>
//       <form className="w-150 space-y-5">
//         <InputField
//           placeholder="First name"
//           value={form.firstName}
//           onChange={(val) => setValue("firstName", val)}
//         />
//         <InputField
//           placeholder="Last name"
//           value={form.lastName}
//           onChange={(val) => setValue("lastName", val)}
//         />
//         <InputField
//           placeholder="Age"
//           value={form.age}
//           onChange={(val) => setValue("age", val)}
//           numberOnly
//         />

//         <CustomButton disabled={isDisabledSubmit()} onClick={handleSubmit}>
//           Submit
//         </CustomButton>
//       </form>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SendHorizonal } from "lucide-react";

export default function SimpleForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    alert(data.get("name") + " " + data.get("email"));
  };

  return (
    <div className="h-full flex items-center justify-center ">
      <Card className="mx-auto mt-10 w-3/4">
        <CardContent className="w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="py-2">Name</Label>
              <Input className="w-full" name="name" />
            </div>
            <div>
              <Label className="py-2">Email</Label>
              <Input name="email" type="email" />
            </div>
            <Button type="submit" className="w-48">
              Submit
              <SendHorizonal />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
