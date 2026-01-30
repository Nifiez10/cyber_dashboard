export function ProfileCard() {
  return (
    <div
      className="
        relative overflow-hidden
        bg-[#0a1219]/90 backdrop-blur-md
        border-2 border-cyan-500/30
        rounded-3xl p-6
        flex flex-col gap-6
        w-[380px]
        shadow-[0_0_50px_rgba(0,255,255,0.1)]
      "
    >
      {/* SCANLINE & GRID EFFECT */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>

      {/* HEADER AVATAR */}
      <div className="relative">
        <div className="absolute top-2 right-2 border border-cyan-500/50 px-2 py-0.5 rounded text-[10px] text-cyan-400 font-mono tracking-tighter z-20">
          CONNECTED_LIVE
        </div>

        <div
          className="
            relative w-full aspect-square rounded-2xl
            border border-cyan-500/40
            overflow-hidden
            shadow-[inset_0_0_20px_rgba(0,255,255,0.2)]
          "
        >
          <img
            src="/avatar.png"
            alt="NIFIEZ"
            className="w-full h-full object-cover grayscale contrast-125"
          />

          <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"></div>
        </div>
      </div>

      {/* NAME */}
      <div className="space-y-1">
        <h1 className="text-4xl font-black tracking-tighter text-cyan-400 uppercase italic">
          Ahmad Hanif Musthofa
        </h1>
        <p className="text-cyan-600 font-mono text-xs">@nifiez</p>
      </div>

      {/* INFO */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-cyan-950/20 border border-cyan-500/20 p-3 rounded-lg">
          <p className="text-[10px] text-cyan-700 font-bold uppercase tracking-widest mb-1">
            Alias
          </p>
          <p className="text-xs text-cyan-100 font-mono">Nifiez</p>
        </div>

        <div className="bg-cyan-950/20 border border-cyan-500/20 p-3 rounded-lg">
          <p className="text-[10px] text-cyan-700 font-bold uppercase tracking-widest mb-1">
            Origin
          </p>
          <p className="text-xs text-cyan-100 font-mono">Indonesia</p>
        </div>
      </div>
    </div>
  );
}
