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
    <div className="w-[250px] h-[250px] border-8 border-blue-900 rounded-full drop-shadow-xl">
      <button
        className="border-4 border-white w-full h-full rounded-full bg-blue-600 duration-100 active:scale-110"
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
