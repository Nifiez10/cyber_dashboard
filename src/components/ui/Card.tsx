import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-slate-900/60 border border-cyan-400/20 rounded-xl p-4 backdrop-blur-md">
      <h3 className="font-mono text-sm mb-2 text-cyan-300">{title}</h3>
      {children}
    </div>
  );
}
