import Image from "next/image"

const NoResultsInstructions = () => {
  return (
    <article className="bg-slate900 py-10 lg:h-auto lg:rounded-bl-[80px] lg:py-0">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          alt=""
          src={"/images/illustration-empty.svg"}
          width={190}
          height={120}
        />
        <h2 className="heading mt-4 text-white">Results shown here</h2>
        <p className="mt-4 max-w-[420px] text-center tracking-[0.1px] text-slate300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </article>
  )
}

export default NoResultsInstructions
