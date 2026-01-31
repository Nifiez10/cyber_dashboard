import { motion } from "framer-motion";

export function SystemActivity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 🌍 GLOBAL HOLOGRAM EARTH */}
      <div className="lg:col-span-2 relative overflow-hidden rounded-xl border border-cyan-400/30 bg-black/70 p-6">
        {/* glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.18),transparent_70%)]" />

        <div className="relative flex flex-col items-center">
          {/* EARTH */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            className="
              relative
              w-64 h-64
              rounded-full
              border border-cyan-400/40
              shadow-[0_0_60px_rgba(0,255,255,0.35)]
              overflow-hidden
            "
          >
            {/* latitude lines */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-cyan-400/40"
                  style={{ top: `${(i + 1) * 14}%` }}
                />
              ))}
            </div>

            {/* longitude lines */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 opacity-20"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 left-1/2 border-l border-cyan-400/40"
                  style={{ transform: `rotate(${i * 22.5}deg)` }}
                />
              ))}
            </motion.div>

            {/* scan ring */}
            <motion.div
              animate={{ scale: [0.6, 1.2], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="
                absolute inset-6
                rounded-full
                border border-cyan-300/60
              "
            />

            {/* core glow */}
            <div className="absolute inset-16 rounded-full bg-cyan-400/10 blur-xl" />
          </motion.div>

          {/* label */}
          <div className="mt-5 text-cyan-300 text-xs tracking-[0.3em]">
            GLOBAL NETWORK SCAN
          </div>
        </div>
      </div>

      {/* 📡 SYSTEM STATUS */}
      <div className="rounded-xl border border-cyan-400/30 bg-black/70 p-5 space-y-3 text-sm font-mono">
        <Status label="CPU LOAD" value="37%" />
        <Status label="RAM USAGE" value="62%" />
        <Status label="UPTIME" value="12:44:08" />
        <Status label="PACKETS" value="ENCRYPTED" />
      </div>

      {/* 🇮🇩 INDONESIA NETWORK */}
      <div className="relative rounded-xl border border-cyan-400/30 bg-black/70 p-6 overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-cyan-500/10 to-transparent" />

        <div className="relative text-cyan-300 text-xs tracking-widest mb-4">
          INDONESIA NETWORK MAP
        </div>

        <div className="relative space-y-2 text-sm font-mono">
          <Node city="JAKARTA" />
          <Node city="SURABAYA" />
          <Node city="BANDUNG" />
          <Node city="YOGYAKARTA" />
        </div>
      </div>

      {/* 🔐 HACKER FEED */}
      <div className="lg:col-span-2 rounded-xl border border-cyan-400/30 bg-black/70 p-5 font-mono text-xs space-y-1 text-cyan-300">
        <p>[+] Establishing secure tunnel...</p>
        <p>[+] Bypassing firewall node_03</p>
        <p className="text-yellow-400">[!] Suspicious traffic detected</p>
        <p>[+] Packet encrypted (AES-256)</p>
        <p className="animate-pulse text-green-400">[✓] SYSTEM STABLE</p>
      </div>
    </div>
  );
}

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-cyan-300">
      <span>{label}</span>
      <span className="text-green-400">{value}</span>
    </div>
  );
}

function Node({ city }: { city: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
      </span>
      <span className="text-cyan-300">{city}</span>
    </div>
  );
}
