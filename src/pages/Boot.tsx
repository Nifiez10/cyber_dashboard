import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Boot({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 800);
          return 100;
        }
        return p + Math.floor(Math.random() * 8);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-cyan-400 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="text-xl tracking-widest mb-4">SYSTEM BOOTING</div>

        <div className="w-72 h-2 border border-cyan-400/40">
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-xs text-cyan-300">
          Loading modules... {progress}%
        </div>

        {progress >= 100 && (
          <div className="mt-4 text-green-400">SYSTEM READY</div>
        )}
      </motion.div>
    </div>
  );
}
