import { InputRadioProps } from "./input-radio.props"
import style from "./style.module.css"

const InputRadio = ({ onChange, isActive, id }: InputRadioProps) => {
  return (
    <div className="text-neutral-light-grayish-blue relative container flex w-full max-w-[2.5rem] items-center justify-center gap-[0.125rem]">
      <input
        className={`${style.input}`}
        type="checkbox"
        checked={isActive}
        onChange={onChange}
        id={id}
      />
      <label
        className={`${style.label} h-5 w-[2.25rem] cursor-pointer ${isActive ? "bg-background-button" : "bg-neutral-300"}`}
        htmlFor={id}
      >
        Toggle
      </label>
    </div>
  )
}

export default InputRadio
