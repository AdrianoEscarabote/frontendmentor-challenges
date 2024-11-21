import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [day, setDay] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [minute, setMinute] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(new Date().getFullYear(), 11, 17);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setDay(String(days).padStart(2, "0"));
        setHour(String(hours).padStart(2, "0"));
        setMinute(String(minutes).padStart(2, "0"));
        setSecond(String(seconds).padStart(2, "0"));
      } else {
        setDay("00");
        setHour("00");
        setMinute("00");
        setSecond("00");
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    day,
    hour,
    minute,
    second,
  };
};
