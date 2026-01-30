import { useEffect, useRef, useState } from "react";

export function Terminal() {
  const [logs, setLogs] = useState<string[]>([
    "NEON_SYS booting...",
    "Loading modules...",
    "System online.",
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  function handleCommand(cmd: string) {
    if (!cmd.trim()) return;

    if (cmd === "help") {
      setLogs((l) => [...l, "> help", "commands: help, clear, status"]);
    } else if (cmd === "status") {
      setLogs((l) => [...l, "> status", "STATUS: CONNECTED"]);
    } else if (cmd === "clear") {
      setLogs([]);
    } else {
      setLogs((l) => [...l, `> ${cmd}`, "command not found"]);
    }
  }

  // auto scroll ke bawah
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div
      className="
      font-mono text-sm
      bg-black/60 border border-cyan-400/20
      rounded-lg
      flex flex-col
      h-64
    "
    >
      {/* LOG AREA */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {logs.map((l, i) => (
          <div key={i} className="text-cyan-300">
            {l}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="border-t border-cyan-400/10 px-3 py-2">
        <input
          className="w-full bg-transparent outline-none text-cyan-400"
          placeholder="> type command..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommand(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}
