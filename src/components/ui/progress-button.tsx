"use client";

export default function ProgressButton({
  amount,
  label,
}: {
  amount: number;
  label: string;
}) {
  function handleClick() {}

  return (
    <div className="w-[230px] h-[230px] border-8 border-gray-900 bg-gray-800 rounded-full drop-shadow-xl">
      <div
        className="border-4 justify-center items-center flex border-white w-full h-full rounded-full bg-gray-600 duration-200 active:scale-90"
      >
        <div className="font-bold text-white text-center">
          <div className="text-5xl">{amount}</div>
          <div className="text-3xl">{label}</div>
        </div>
      </div>
    </div>
  );
}
