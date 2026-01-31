import { useEffect, useRef, useState } from "react";

type Log = {
  text: string;
  type?: "normal" | "success" | "error" | "system";
};

export function Terminal() {
  const [logs, setLogs] = useState<Log[]>([
    { text: "NEON_SYS v1.0", type: "system" },
    { text: "Boot sequence complete.", type: "system" },
    { text: "Type 'help' to list commands." },
  ]);

  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  function pushLog(text: string, type: Log["type"] = "normal") {
    setLogs((l) => [...l, { text, type }]);
  }

  // efek typing (huruf per huruf)
  function typeText(text: string, type: Log["type"] = "success", speed = 90) {
    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          text: text.slice(0, i),
          type,
        };
        return copy;
      });
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
  }

  function handleCommand(raw: string) {
    if (!raw.trim()) return;

    const cmd = raw.toLowerCase();
    setHistory((h) => [...h, raw]);
    setHistoryIndex(null);

    pushLog(`$ ${raw}`, "system");

    setTimeout(() => {
      switch (cmd) {
        case "help":
          pushLog("available commands:");
          pushLog("- help");
          pushLog("- status");
          pushLog("- clear");
          pushLog("- alya");
          break;

        case "status":
          pushLog("STATUS: CONNECTED", "success");
          break;

        case "alya":
          pushLog("EXECUTING ALYA PROTOCOL...", "system");

          setTimeout(() => {
            pushLog("[■■■■□□□□□□] 40%", "system");
          }, 300);

          setTimeout(() => {
            pushLog("[■■■■■■■■□□] 80%", "system");
          }, 600);

          setTimeout(() => {
            pushLog("[■■■■■■■■■■] 100%", "system");
          }, 900);

          setTimeout(() => {
            pushLog("", "success"); // placeholder
            typeText(
              "ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧ HALO ALYAAA ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
              "success",
              85,
            );
          }, 1200);
          break;

        case "clear":
          setLogs([]);
          break;

        default:
          pushLog("command not found", "error");
      }
    }, 200);
  }

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div
      className="
      font-mono text-sm
      bg-black/80
      border border-cyan-400/30
      rounded-xl
      shadow-[0_0_40px_rgba(0,255,255,0.2)]
      flex flex-col
      h-72
      overflow-hidden
    "
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-cyan-400/20 bg-black/70">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-cyan-300 text-xs tracking-widest">
          NEON TERMINAL — FULL ACCESS
        </span>
      </div>

      {/* LOG AREA */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
        {logs.map((log, i) => (
          <div key={i}>
            <span
              className={
                log.type === "success" && log.text.includes("ALYA")
                  ? "text-pink-400 text-lg font-bold animate-pulse drop-shadow-[0_0_14px_rgba(255,100,200,0.9)]"
                  : log.type === "success"
                    ? "text-green-400"
                    : log.type === "error"
                      ? "text-red-400"
                      : log.type === "system"
                        ? "text-cyan-400/70"
                        : "text-cyan-300"
              }
            >
              {log.text}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="border-t border-cyan-400/20 px-4 py-2 flex items-center gap-2 bg-black/60">
        <span className="text-cyan-400">nifiez@system:~$</span>
        <input
          ref={inputRef}
          className="flex-1 bg-transparent outline-none text-cyan-300 caret-cyan-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommand(e.currentTarget.value);
              e.currentTarget.value = "";
            }

            if (e.key === "ArrowUp") {
              e.preventDefault();
              if (history.length === 0) return;
              const index =
                historyIndex === null
                  ? history.length - 1
                  : Math.max(0, historyIndex - 1);
              setHistoryIndex(index);
              e.currentTarget.value = history[index];
            }

            if (e.key === "ArrowDown") {
              e.preventDefault();
              if (historyIndex === null) return;
              const index = historyIndex + 1;
              if (index >= history.length) {
                setHistoryIndex(null);
                e.currentTarget.value = "";
              } else {
                setHistoryIndex(index);
                e.currentTarget.value = history[index];
              }
            }
          }}
        />
        <span className="animate-pulse text-cyan-400">▍</span>
      </div>
    </div>
  );
}
