import Image from "next/image";
import { ButtonProps } from "./ButtonProps";
import { twMerge } from "tailwind-merge";

const Button = ({ className, label, showIcon, ...props }: ButtonProps) => {
  const classNameTw = twMerge(
    `bg-primary-orange hover:bg-[#ff7d1a8e] w-full h-[3.5rem] grid place-content-center rounded-[0.625rem] flex flex-row items-center gap-4 font-bold text-neutral-very-dark-blue ${className}`,
  );
  return (
    <button className={classNameTw} {...props}>
      {showIcon && (
        <Image
          alt=""
          src={"/images/icon-cart-black.svg"}
          width={17}
          height={17}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
