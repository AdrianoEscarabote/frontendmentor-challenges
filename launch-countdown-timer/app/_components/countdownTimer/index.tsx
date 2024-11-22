"use client";

import CountdownUnit from "../countdownUnit";
import { useCountdown } from "@/hooks/useCountdown";

const CountdownTimer = () => {
  const { day, hour, minute, second } = useCountdown();

  return (
    <article>
      <div className="flex md:gap-[1.875rem] gap-2 md:mb-0 mb-10">
        <CountdownUnit text="Days" number={day} />
        <CountdownUnit text="Hours" number={hour} />
        <CountdownUnit text="Minutes" number={minute} />
        <CountdownUnit text="Seconds" number={second} />
      </div>
    </article>
  );
};

export default CountdownTimer;
