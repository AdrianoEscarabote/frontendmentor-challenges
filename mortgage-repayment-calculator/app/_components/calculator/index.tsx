import CalculateButton from "../calculateButton"
import InputRadio from "../inputRadio"

const Calculator = () => {
  return (
    <section className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="heading text-slate900">Mortgage Calculator</h1>
        <button className="underline">Clear All</button>
      </div>

      <form action="" className="mt-10">
        <div className="flex flex-col gap-2">
          <p>Mortgage Amount</p>
          <label htmlFor="" className="relative flex flex-col overflow-hidden">
            <span className="absolute flex h-full w-10 items-center justify-center bg-slate100">
              £
            </span>

            <input
              type="text"
              name=""
              id=""
              className="h-[50px] rounded-lg border border-solid border-black pl-10"
            />
          </label>
        </div>
        <div className="mt-[26px] grid grid-cols-2 gap-[20px]">
          <div className="flex flex-col gap-2">
            <p>Mortgage Term</p>
            <label
              htmlFor=""
              className="relative flex flex-col overflow-hidden"
            >
              <span className="absolute right-0 flex h-full w-10 items-center justify-center bg-slate100">
                years
              </span>

              <input
                type="text"
                name=""
                id=""
                className="h-[50px] rounded-lg border border-solid border-black pr-10"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <p>Interest Rate</p>
            <label
              htmlFor=""
              className="relative flex flex-col overflow-hidden"
            >
              <span className="absolute right-0 flex h-full w-10 items-center justify-center bg-slate100">
                %
              </span>

              <input
                type="text"
                name=""
                id=""
                className="h-[50px] rounded-lg border border-solid border-black pr-10"
              />
            </label>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <p>Mortgage Type</p>
          <div className="flex flex-col gap-2">
            <InputRadio />
            <InputRadio />
          </div>
        </div>
        <div className="mt-10">
          <CalculateButton />
        </div>
      </form>
    </section>
  )
}

export default Calculator
