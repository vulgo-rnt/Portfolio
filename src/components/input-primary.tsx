import { InputHTMLAttributes } from "react";

export default function InputPrimary(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={`bg-[#c9d1d9] dark:focus:text-color_btn_dark dark:focus:placeholder:text-color_btn_dark placeholder:text-primary hover:bg-[#adb5bd] focus:bg-transparent focus:border-blue-500 border-transparent border-2 border-solid leading-none transition-colors duration-500 py-[10px] pl-6 rounded-xl ${props.className}`}
    />
  );
}
