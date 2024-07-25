import { PrimaryButtonProps } from "./PrimaryButtonProps";

const PrimaryButton = ({
  label,
  onClick,
  "aria-label": ariaLabel,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={`${disabled ? "opacity-50" : ""} bg-red text-white rounded-full py-4 w-full font-medium text-base`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
