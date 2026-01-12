import CustomButton from "../_components/cus-btn";
import InputField from "../_components/input-field";

export default function MediumForm() {
  return (
    <div className="flex flex-col items-center w-full p-5">
      <h2>Medium Form</h2>
      <form className="w-150 space-y-5">
        <InputField
          placeholder="First name"
          // value={form.firstName}
          // onChange={(val) => setValue("firstName", val)}
        />
        <InputField
          placeholder="Last name"
          // value={form.lastName}
          // onChange={(val) => setValue("lastName", val)}
        />
        <InputField
          placeholder="Age"
          // value={form.age}
          // onChange={(val) => setValue("age", val)}
          numberOnly
        />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />
        <InputField placeholder="1" />

        <CustomButton>Submit</CustomButton>
      </form>
    </div>
  );
}
