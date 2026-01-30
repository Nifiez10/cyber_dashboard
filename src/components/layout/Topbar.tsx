import { Wifi, Instagram, Music2 } from "lucide-react";

export function Topbar() {
  return (
    <header
      className="
        h-16 flex items-center justify-between
        px-8 ml-16
        border-b border-cyan-400/10
        bg-black/30 backdrop-blur
        z-30
      "
    >
      <div className="text-cyan-300 font-semibold tracking-widest">
        NIFIEZ DASHBOARD
      </div>

      {/* RIGHT STATUS */}
      <div className="flex items-center gap-4 text-xs">
        {/* CONNECTION */}
        <div className="flex items-center gap-2 text-cyan-400">
          <Wifi size={14} />
          CONNECTED_LIVE
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/ahmadhanifiez"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-cyan-400/70
              hover:text-cyan-400
              transition
              hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]
            "
          >
            <Instagram size={14} />
          </a>

          <a
            href="https://www.tiktok.com/@zanifmc"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-cyan-400/70
              hover:text-cyan-400
              transition
              hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]
            "
          >
            {/* Ikon TikTok (Lucide substitute) */}
            <Music2 size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
