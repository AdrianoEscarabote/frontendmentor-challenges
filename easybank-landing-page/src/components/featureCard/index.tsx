import Image from "next/image"
import { FeatureCardProps } from "./featureCard"

const FeatureCard = ({ text, title, iconPath }: FeatureCardProps) => {
  return (
    <div className="flex max-w-[375px] flex-col items-center text-center md:max-w-[420px] lg:max-w-[256.1px] lg:items-start lg:text-left">
      <Image
        src={`${iconPath}`}
        alt=""
        width={0}
        height={0}
        className={"h-[72px] w-[72px]"}
      />
      <h4 className="headingSm mt-[39px] text-darkBlue">{title}</h4>
      <p className="bodyMd mt-[27px] text-grayishBlue">{text}</p>
    </div>
  )
}

export default FeatureCard
