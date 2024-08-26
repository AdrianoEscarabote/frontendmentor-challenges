import Image from "next/image"
import { ArticleProps } from "./article"
import style from "./style.module.css"

const Article = ({ author, imagePath, text, title }: ArticleProps) => {
  return (
    <article className="w-full max-w-[320px] overflow-hidden rounded-lg md:max-w-[255px]">
      <div className="rounded-lg bg-white">
        <Image
          src={`${imagePath}`}
          alt=""
          width={0}
          height={0}
          className="h-auto w-[320px] object-cover lg:h-[201px] lg:w-[255px]"
        />
        <div className="p-6 pt-[26px]">
          <p className="text-[10px] text-grayishBlue">{author}</p>
          <h4 className="headingXs mt-[9px] text-darkBlue">{title}</h4>
          <p className="bodySm mt-[8px] text-grayishBlue">{text}</p>
        </div>
      </div>
    </article>
  )
}

export default Article
