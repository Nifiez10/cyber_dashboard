import {
  Activity,
  User,
  Terminal,
  Settings,
  Database
} from "lucide-react";

const items = [
  { icon: Activity },
  { icon: User },
  { icon: Terminal },
  { icon: Database },
  { icon: Settings }
];

export function Navbar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16
      bg-black/40 backdrop-blur
      border-r border-cyan-400/10
      flex flex-col items-center py-6 gap-6
      z-40">

      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={i}
            className="w-10 h-10 flex items-center justify-center
              text-cyan-400/60
              hover:text-cyan-300
              hover:shadow-[0_0_12px_rgba(0,200,255,0.4)]
              transition-all"
          >
            <Icon size={20} />
          </button>
        );
      })}
    </aside>
  );
}
