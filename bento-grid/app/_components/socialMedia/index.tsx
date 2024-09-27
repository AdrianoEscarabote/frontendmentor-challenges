import Image from "next/image"

const SocialMedia = () => {
  return (
    <article className="flex h-full w-full items-start justify-center rounded-xl bg-purple500">
      <div className="mt-0 flex flex-col items-center justify-center px-3 py-6 xl:mt-16 xl:p-0">
        <h1 className="heading flex flex-col items-center text-center text-white">
          <span>
            Social Media <span className="text-yellow500"> 10x</span>
          </span>
          <span>
            <i>Faster</i> with AI
          </span>
        </h1>

        <Image
          src={"/images/illustration-five-stars.webp"}
          width={192}
          height={39}
          alt="illustration five stars"
          className="mt-[24px]"
        />
        <p className="body mt-1 text-white">Over 4,000 5-star reviews</p>
      </div>
    </article>
  )
}

export default SocialMedia
