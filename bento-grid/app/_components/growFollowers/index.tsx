import Image from "next/image"

const GrowFollowers = () => {
  return (
    <article className="h-full w-full rounded-lg bg-purple500">
      <div className="flex flex-col items-center gap-6 p-6 py-[22px] xl:flex-row xl:gap-3">
        <Image
          src={"/images/illustration-grow-followers.webp"}
          width={230}
          height={39}
          alt="illustration grow followers"
        />
        <h2 className="headingM text-center font-normal tracking-[-0.7px] text-white xl:text-start">
          Grow followers with non-stop content.
        </h2>
      </div>
    </article>
  )
}

export default GrowFollowers
