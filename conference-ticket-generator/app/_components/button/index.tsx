import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./buttonProps";

const Button = ({ className, label, ...props }: ButtonProps) => {
  const classNameTw = twMerge(
    `w-full h-[3.375rem] grid place-content-center text-neutral-900 bg-orange-500 rounded-xl font-extrabold text-[19.4px]`,
    className
  );
  return (
    <button data-testid="button" className={classNameTw} {...props}>
      {label}
    </button>
  );
};

export default Button;
