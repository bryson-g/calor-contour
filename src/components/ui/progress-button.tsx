"use client";

import { useRouter } from "next/navigation";

export default function ProgressButton({
  amount,
  label,
  redirect,
}: {
  amount: number;
  label: string;
  redirect?: string;
}) {
  const { push } = useRouter();

  return (
    <button
      className="w-[30vh] h-[30vh] border-8 border-gray-900 bg-gray-800 rounded-full drop-shadow-xl"
      onClick={() => {
        if (redirect) push(redirect);
      }}
    >
      <div className="border-4 justify-center items-center flex border-white w-full h-full rounded-full bg-gray-600 duration-200 active:scale-90">
        <div className="font-bold text-white text-center">
          <div className="text-5xl">{amount}</div>
          <div className="text-3xl">{label}</div>
        </div>
      </div>
    </button>
  );
}
