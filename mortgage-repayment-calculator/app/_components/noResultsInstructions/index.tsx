import Image from "next/image"

const NoResultsInstructions = () => {
  return (
    <article className="rounded-bl-[76px] bg-slate900">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          alt=""
          src={"/images/illustration-empty.svg"}
          width={190}
          height={120}
        />
        <h2 className="heading mt-4 text-white">Results shown here</h2>
        <p className="bodyS mt-4 max-w-[420px] text-center text-slate300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </article>
  )
}

export default NoResultsInstructions
