import Image from "next/image";
import { GeneratedTicketProps } from "./generatedTicketProps";
import style from "./style.module.css";

const GeneratedTicket = ({ email, name, username }: GeneratedTicketProps) => {
  return (
    <section>
      <div className="lg:px-0 px-4 flex flex-col items-center justify-center py-10 relative">
        <Image
          src={"/images/logo-full.svg"}
          alt=""
          width={205}
          className="mt-[0.0625rem]"
          height={30}
        />
        <h2
          data-testid="heading"
          className="text-neutral-0 max-w-[51.25rem] text-center pt-[4.5rem] lg:text-[3.625rem] text-[2.25rem] font-bold leading-[1.12]"
        >
          Congrats,{" "}
          <span className="bg-gradient-text bg-clip-text text-transparent">
            {name}
          </span>
          ! Your ticket is ready.
        </h2>
        <p className="text-neutral-300 flex flex-col text-center text-[1.4375rem] pt-8 leading-[1.3]">
          <span>We&apos;ve emailed your ticket to</span>
          <span>
            <span className="text-orange-500">{email}</span> and will send
            updates in
          </span>
          <span>the run up to the event.</span>
        </p>

        <div
          className={`${style.ticket} bg-[url(/images/pattern-ticket.svg)] bg-no-repeat bg-cover bg-center pt-[1.8125rem] pb-6 px-6 lg:w-[37.5rem] w-full lg:h-[17.5rem] h-full lg:max-w-none max-w-[24.375rem] mt-[6.75rem] flex flex-col lg:gap-0 gap-[1rem] justify-between relative`}
        >
          <div>
            <Image
              src={"/images/logo-full.svg"}
              alt=""
              width={270}
              className="w-[9.375rem] lg:w-[16.875rem]"
              height={30}
            />
            <p className="text-neutral-300 text-[1.125rem] lg:text-[1.1875rem] mt-2 lg:ml-[3.75rem] ml-8">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
          <div className="flex gap-4">
            <Image
              src={"/images/image-avatar.jpg"}
              alt=""
              data-testid="avatar"
              width={80}
              height={80}
              className="rounded-xl lg:w-[5rem] w-[3.5rem] lg:h-[5rem] h-[3.5rem]"
            />
            <div>
              <p className="text-neutral-300 text-xl lg:text-[1.75rem] lg:mt-1">
                {name}
              </p>
              <div className="flex lg:mt-0.5 gap-2">
                <Image
                  src={"/images/icon-github.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-neutral-300 text-[1.0625rem] lg:text-[1.1875rem]">
                  @{username}
                </p>
              </div>
              <p className="text-neutral-500 rotate-90 absolute right-0 lg:right-3 top-20 lg:top-[7.5rem] text-[1.75rem]">
                #01609
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratedTicket;
