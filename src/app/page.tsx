import ProgressButton from "./components/progress-button";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-blue-700 flex flex-col gap-10 justify-center items-center">
      <ProgressButton amount={1532} label="left" />
      <ProgressButton amount={459} label="eaten" />
      <ProgressButton amount={853} label="planned" />
    </main>
  );
}
