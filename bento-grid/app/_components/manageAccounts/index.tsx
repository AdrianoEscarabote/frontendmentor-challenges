import Image from "next/image"

const ManageAccounts = () => {
  return (
    <article className="h-full rounded-md bg-white xl:max-w-[255px] xl:overflow-hidden">
      <div className="flex h-full flex-col gap-6 p-6">
        <div className="relative xl:w-[420px]">
          <Image
            src={"/images/illustration-multiple-platforms.webp"}
            width={300}
            height={400}
            alt="illustration multiple platforms"
            className="left-0 top-0 w-full xl:absolute xl:w-[312px]"
          />
        </div>

        <h2 className="headingS top-[64px] xl:relative">
          Manage multiple accounts and platforms.
        </h2>
      </div>
    </article>
  )
}

export default ManageAccounts
