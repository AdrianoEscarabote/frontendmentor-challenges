import Image from "next/image"

const MaintainSchedule = () => {
  return (
    <article className="h-full w-full overflow-hidden rounded-md bg-yellow500">
      <div className="pl-6 pr-6 pt-6 xl:p-6 xl:py-[25px]">
        <h2 className="headingS">Maintain a consistent posting schedule.</h2>
        <Image
          src={"/images/illustration-consistent-schedule.webp"}
          alt="illustration consistent schedule"
          width={210}
          height={300}
          className="mt-4"
        />
      </div>
    </article>
  )
}

export default MaintainSchedule
