import { Activity, User, Terminal } from "lucide-react";

type Page = "dashboard" | "activity" | "terminal";

export function Navbar({
  active,
  onChange,
}: {
  active: Page;
  onChange: (page: Page) => void;
}) {
  const btn = (isActive: boolean) => `
    w-10 h-10 flex items-center justify-center rounded-md
    transition-all duration-200
    ${
      isActive
        ? "text-cyan-300 shadow-[0_0_16px_rgba(0,255,255,0.7)]"
        : "text-cyan-400/50 hover:text-cyan-300"
    }
    hover:outline hover:outline-2 hover:outline-cyan-300
    hover:shadow-[0_0_22px_rgba(0,255,255,0.8)]
  `;

  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-16
        bg-black/40 backdrop-blur
        border-r border-cyan-400/10
        flex flex-col items-center py-5
        z-40
      "
    >
      {/* PROFILE → DASHBOARD UTAMA */}
      <button
        onClick={() => onChange("dashboard")}
        className={btn(active === "dashboard")}
        title="Dashboard"
      >
        <User size={20} />
      </button>

      {/* ACTIVITY → DASHBOARD KE-2 */}
      <button
        onClick={() => onChange("activity")}
        className={`${btn(active === "activity")} mt-4`}
        title="Activity"
      >
        <Activity size={20} />
      </button>

      {/* TERMINAL → PAGE KHUSUS */}
      <button
        onClick={() => onChange("terminal")}
        className={`${btn(active === "terminal")} mt-4`}
        title="Terminal"
      >
        <Terminal size={20} />
      </button>
    </aside>
  );
}
