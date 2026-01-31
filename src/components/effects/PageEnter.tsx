import { ReactNode, useEffect, useState } from "react";

export function PageEnter({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.97]"}
      `}
    >
      {children}
    </div>
  );
}
