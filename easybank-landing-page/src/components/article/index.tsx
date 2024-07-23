import Image from "next/image";
import { ArticleProps } from "./article";

const Article = ({ author, imagePath, text, title }: ArticleProps) => {
  return (
    <article className="rounded-lg overflow-hidden w-full max-w-[240px]">
      <div className="rounded-lg bg-white">
        <Image src={`${imagePath}`} alt="" width={500} height={500} />
        <div className="p-3">
          <p className="bodySm text-grayishBlue">{author}</p>
          <h4 className="headingSm text-darkBlue">{title}</h4>
          <p className="bodyMd text-grayishBlue">{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Article;
