import Image from "next/image"

const FasterGrowth = () => {
  return (
    <article className="h-full w-full bg-white shadow">
      <div className="flex h-full flex-col items-center justify-between gap-4 p-6 py-[25px] xl:gap-0">
        <h2 className="heading flex w-full flex-col gap-3">
          {">"}56%
          <span className="body tracking-[0.1px]">faster audience growth</span>
        </h2>

        <Image
          src={"/images/illustration-audience-growth.webp"}
          width={180}
          height={39}
          alt="illustration-audience-growth"
          className="self-start"
        />
      </div>
    </article>
  )
}

export default FasterGrowth
