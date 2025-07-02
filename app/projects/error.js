"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Try again
      </button>
      <p className="text-red-500">{error.message}</p>
    </div>
  );
}
