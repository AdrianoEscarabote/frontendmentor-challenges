import Image from "next/image"

const WriteUsingAI = () => {
  return (
    <article className="h-full w-full rounded-md bg-yellow500">
      <div className="flex h-full w-full flex-col justify-between gap-5 p-[23px] py-[27px] pr-[13px] xl:gap-0">
        <h2 className="headingM max-w-[180px]">Write your content using AI.</h2>
        <Image
          src={"/images/illustration-ai-content.webp"}
          width={290}
          height={39}
          alt="illustration ai content"
        />
      </div>
    </article>
  )
}

export default WriteUsingAI
