import Image from "next/image"

const ScheduleSocialMedia = () => {
  return (
    <article className="h-full w-full overflow-hidden rounded-md bg-purple100 xl:max-w-[255px]">
      <div className="flex flex-col gap-6 p-8 py-[50px]">
        <h2 className="headingS">Schedule to social media.</h2>

        <div className="overflow-hidden xl:relative xl:h-[320px] xl:w-[356px]">
          <Image
            src={"/images/illustration-schedule-posts.webp"}
            width={350}
            height={320}
            alt="illustration schedule posts"
            className="left-0 top-0 xl:absolute xl:h-[320px] xl:w-[356px]"
          />
        </div>

        <p className="body text-center leading-[20px] xl:text-start">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
    </article>
  )
}

export default ScheduleSocialMedia
