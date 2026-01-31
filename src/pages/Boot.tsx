import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Boot({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 1200);
          return 100;
        }

        // efek lonjakan listrik (kadang besar, kadang kecil)
        const spike = Math.random() > 0.8 ? 15 : Math.random() * 6;
        return Math.min(p + spike, 100);
      });

      // flash listrik random
      if (Math.random() > 0.85) {
        setFlash(true);
        setTimeout(() => setFlash(false), 80);
      }
    }, 160);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-cyan-400 font-mono overflow-hidden">
      {/* FLASH LISTRIK */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="absolute inset-0 bg-cyan-400/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* BOOT CORE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative text-center"
      >
        {/* TEKS BOOT */}
        <motion.div
          className="text-xl tracking-[0.3em] mb-6"
          animate={{
            textShadow: [
              "0 0 6px #00f2ff",
              "0 0 14px #00f2ff",
              "0 0 6px #00f2ff",
            ],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          SYSTEM BOOTING
        </motion.div>

        {/* PROGRESS BAR */}
        <div className="relative w-80 h-2 border border-cyan-400/40 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />

          {/* ELECTRIC SCAN */}
          <motion.div
            className="absolute top-0 h-full w-10 bg-white/30 blur-sm"
            animate={{ x: ["-40px", "320px"] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "linear",
            }}
          />
        </div>

        {/* STATUS */}
        <div className="mt-4 text-xs text-cyan-300 tracking-widest">
          INITIALIZING MODULES... {Math.floor(progress)}%
        </div>

        {/* FINAL STATE */}
        <AnimatePresence>
          {progress >= 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
                textShadow: "0 0 18px #00ff9c",
              }}
              transition={{ duration: 0.6 }}
              className="mt-5 text-green-400 tracking-widest"
            >
              SYSTEM READY
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
