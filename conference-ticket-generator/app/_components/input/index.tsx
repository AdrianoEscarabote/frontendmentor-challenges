import { forwardRef, Ref } from "react";
import { InputProps } from "./inputProps";

const Input = (
  { label, error, errorMessage, id, ...props }: InputProps,
  ref: Ref<HTMLInputElement> | undefined
) => {
  return (
    <label htmlFor={id} className="relative w-full text-neutral-300">
      <span className="absolute -top-8 text-[1.1875rem]">{label}</span>
      <input
        className="bg-[#4b486a4d] w-full border border-neutral-500 rounded-xl px-4 py-[0.875rem] text-lg"
        ref={ref}
        id={id}
        name={id}
        type="text"
        {...props}
      />
      {error && errorMessage && (
        <span className="w-full left-0 text-red-500 text-[0.7312rem] top-16 absolute">
          {errorMessage}
        </span>
      )}
    </label>
  );
};

export default forwardRef(Input);
