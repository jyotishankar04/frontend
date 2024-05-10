import { ChangeEvent } from "react";

interface labeledInputType {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function InputFields({ type, placeholder, onChange }: labeledInputType) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="px-4 py-2 rounded-md outline-none w-full focus:outline-1 focus:outline-gray-800 md:w-full"
    />
  );
}

export default InputFields;
