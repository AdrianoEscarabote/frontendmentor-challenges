import Article from "../article"

const LatestArticles = () => {
  return (
    <section className="bg-veryLightGray pb-[40px] pt-[40px] lg:pb-[81px] lg:pt-[83px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-5 xl:px-[165px]">
        <h3 className="headingMd text-center text-darkBlue lg:text-left">
          Latest Articles
        </h3>
        <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <Article
            author="By Claire Robinson"
            title="Receive money in any currency with no fees"
            text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
            imagePath="/images/image-currency.jpg"
          />
          <Article
            title="Treat yourself without worrying about money"
            text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            author="By Wilson Hutton"
            imagePath="/images/image-restaurant.jpg"
          />
          <Article
            title="Take your Easybank card wherever you go"
            author="By Wilson Hutton"
            text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
            imagePath="/images/image-plane.jpg"
          />
          <Article
            title="Our invite-only Beta accounts are now live!"
            imagePath="/images/image-confetti.jpg"
            text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
            author="By Claire Robinson"
          />
        </div>
      </div>
    </section>
  )
}

export default LatestArticles
