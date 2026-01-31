import { Wifi, Instagram, Music2 } from "lucide-react";

export function Topbar() {
  return (
    <header
      className="
        sticky top-0
        h-12 md:h-16
        w-full
        flex items-center justify-between
        px-4 md:px-10
        md:pl-24
        border-b border-cyan-400/10
        bg-black/40 backdrop-blur
        z-30
      "
    >
      {/* LEFT TITLE */}
      <div className="text-cyan-300 font-semibold tracking-widest text-xs md:text-sm">
        NIFIEZ DASHBOARD
      </div>

      {/* RIGHT STATUS */}
      <div className="flex items-center gap-3 text-xs">
        <div className="hidden sm:flex items-center gap-1 text-cyan-400">
          <Wifi size={12} />
          CONNECTED
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/ahmadhanifiez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400/70 hover:text-cyan-400 transition"
          >
            <Instagram size={16} />
          </a>

          <a
            href="https://www.tiktok.com/@zanifmc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400/70 hover:text-cyan-400 transition"
          >
            <Music2 size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
