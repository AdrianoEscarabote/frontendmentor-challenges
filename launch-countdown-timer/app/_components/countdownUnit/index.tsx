import { useEffect, useState } from "react";
import { CountdownUnitProps } from "./countdownUnitProps";
import style from "./style.module.css";

const CountdownUnit = ({ number, text }: CountdownUnitProps) => {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    setFlipping(true);
    const timeout = setTimeout(() => setFlipping(false), 500);

    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div
      className={`${style.flip_container} relative flex items-center justify-center flex-col`}
    >
      <div className="md:w-full w-[4.6875rem] bg-neutral-dark-blue absolute z-50 h-[0.0625rem] md:top-[38.5%] top-[37.5%]"></div>
      <div
        className={`md:w-[9.375rem] w-[4.6875rem] md:h-[9.375rem] h-[4.6875rem] overflow-hidden relative after:absolute after:bottom-0 after:rounded-full after:bg-neutral-very-dark-blue after:w-[0.875rem] after:h-[0.875rem] after:z-50 after:top-[42%] after:-left-2 before:absolute before:bottom-0 before:rounded-full before:bg-neutral-very-dark-blue before:w-[0.875rem] before:h-[0.875rem]  before:top-[42%] before:-right-2 before:z-50 `}
      >
        <div
          className={`${style.front} rounded-lg absolute h-full w-full flex items-center justify-center flex-col gap-1`}
        >
          <div
            className={`${
              style.flip_card
            } bg-[#2C2E44] rounded-ss-lg rounded-se-lg top-0 absolute w-full md:h-[4.4375rem] h-[2.4063rem] ${
              flipping ? style.flipping : ""
            }`}
          ></div>
          <p className="font-bold md:mb-[0.625rem] z-10 md:text-[4.75rem] text-primary-soft-red absolute text-[2.25rem]">
            {number}
          </p>
        </div>

        <div
          className={`-z-10 bg-neutral-dark-desaturated-blue rounded-lg absolute w-full flex items-center justify-center rounded-ee-lg rounded-es-lg md:h-[8.75rem] h-[4.6875rem]`}
        >
          <p className="font-bold md:text-[4.75rem] text-primary-soft-red text-[2.25rem]">
            {number}
          </p>
        </div>
        <div className="bg-neutral-very-dark-blue w-full -z-30 md:h-6 absolute bottom-0 rounded-ee-lg rounded-es-lg"></div>
      </div>
      <div className="text-primary-grayish-blue font-semibold tracking-[0.3625rem] mt-[0.9375rem] md:text-sm uppercase text-[0.5rem]">
        {text}
      </div>
    </div>
  );
};

export default CountdownUnit;
