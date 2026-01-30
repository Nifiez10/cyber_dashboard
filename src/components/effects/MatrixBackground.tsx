import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const letters = "アカサタナハ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    // Inisialisasi posisi acak agar tidak serentak muncul dari atas
    const drops = Array(columns)
      .fill(0)
      .map(() => Math.random() * -100);

    let lastTime = 0;

    // 🐢 SPEED: Diperbesar agar jeda antar render lebih lama (sebelumnya 30)
    const speed = 50;

    function draw(time: number) {
      if (time - lastTime < speed) {
        requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      // Trail (ekor) sedikit lebih lama menghilangnya untuk kesan lambat yang halus
      ctx.fillStyle = "rgba(5, 10, 20, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- EFEK NEON GLOW ---
      ctx.shadowBlur = 12; // Sedikit ditambah agar lebih berpendar
      ctx.shadowColor = "#00f2ff";
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = "#00f2ff";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        // Gambar karakter
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop jika sudah sampai bawah
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        // 🐢 KECEPATAN JATUH: Diturunkan drastis (sebelumnya 1.2)
        // Nilai 0.6 memberikan pergerakan yang pelan dan elegan
        drops[i] += 1.0;
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(draw);
    }

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80"
    />
  );
}
