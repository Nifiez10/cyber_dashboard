import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-lg border border-cyan-400 px-4 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
      {children}
    </button>
  );
}
