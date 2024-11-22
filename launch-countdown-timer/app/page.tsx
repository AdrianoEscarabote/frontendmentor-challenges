import CountdownTimer from "./_components/countdownTimer";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center md:justify-start justify-center justi bg-hills bg-bottom bg-repeat-x min-h-screen after:bg-gradient after:min-h-screen after:w-full after:fixed after:-z-50 before:bg-stars before:-z-40 before:min-h-screen before:w-full before:absolute">
      <h1 className="sr-only">Launch Countdown timer</h1>
      <h2 className="text-white uppercase font-bold md:text-[1.4375rem] text-lg text-center tracking-[0.425rem] md:mt-[8.5rem] mb-[3.25rem] md:mb-[6.5rem] md:max-w-none max-w-72">
        We&apos;re launching soon
      </h2>
      <CountdownTimer />
      <Footer />
    </main>
  );
}
