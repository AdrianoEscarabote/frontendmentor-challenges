import Image from "next/image"

const CreateQuicker = () => {
  return (
    <article className="h-full rounded-md bg-yellow100">
      <div className="flex flex-col gap-6 p-[30px] xl:pt-20">
        <h2 className="headingM">
          Create and schedule content <i className="text-purple500">quicker</i>.
        </h2>
        <Image
          src={"/images/illustration-create-post.webp"}
          width={190}
          height={39}
          alt="illustration create post"
        />
      </div>
    </article>
  )
}

export default CreateQuicker
