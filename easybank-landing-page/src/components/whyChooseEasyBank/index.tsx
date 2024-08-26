import FeatureCard from "../featureCard"

const WhyChooseEasyBank = () => {
  return (
    <section className="bg-lightGrayishBlue py-24">
      <div className="mx-auto max-w-[1440px] px-5 xl:px-[165px]">
        <div className="flex flex-col gap-[18px]">
          <h2 className="headingMd lg:text-star text-center text-darkBlue">
            Why choose Easybank?
          </h2>
          <p className="bodyXl lg:text-star mb-8 flex flex-col gap-[2px] text-center text-grayishBlue lg:mb-0">
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <span>Control your finances like never before.</span>
          </p>

          <ul className="flex w-full flex-col items-center justify-between gap-8 lg:mt-[52px] lg:flex-row lg:items-start lg:gap-0">
            <li>
              <FeatureCard
                iconPath="/images/icon-online.svg"
                text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                title="Online Banking"
              />
            </li>
            <li>
              <FeatureCard
                title="Simple Budgeting"
                iconPath="/images/icon-budgeting.svg"
                text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
              />
            </li>
            <li>
              <FeatureCard
                title="Fast Onboarding"
                iconPath="/images/icon-onboarding.svg"
                text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
              />
            </li>
            <li>
              <FeatureCard
                iconPath="/images/icon-api.svg"
                title="Open API"
                text="Manage your savings,  investments, pension, and much more from one account. Tracking your money has never been easier."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseEasyBank
