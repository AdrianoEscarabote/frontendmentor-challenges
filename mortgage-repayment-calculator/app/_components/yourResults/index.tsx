/* eslint-disable react/no-unescaped-entities */
const YourResults = () => {
  return (
    <article className="rounded-bl-[76px] bg-slate900 text-white">
      <div className="p-10">
        <h2 className="heading">Your results</h2>
        <p className="bodyS mt-4">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>

        <div className="relative mt-10 rounded-xl border-t-4 border-lime bg-black px-8 py-[26px]">
          <p className="flex flex-col">
            Your monthly repayments
            <span className="payment text-lime">£ 1,797.74</span>
          </p>

          <div className="absolute h-[1px] w-full bg-white"></div>

          <p className="flex flex-col">
            Total you'll repay over the term
            <span className="">£ 539,322.94</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default YourResults
