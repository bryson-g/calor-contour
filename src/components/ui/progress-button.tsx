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
      <button
        className="border-4 border-white w-full h-full rounded-full bg-gray-600 duration-200 active:scale-90"
        onClick={handleClick}
      >
        <div className="font-bold text-white">
          <p className="text-6xl">{amount}</p>
          <p className="text-4xl">{label}</p>
        </div>
      </button>
    </div>
  );
}
