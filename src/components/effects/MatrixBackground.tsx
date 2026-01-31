import { useEffect, useRef } from "react";

export default function MatrixBackground({ mode = "boot" }) {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const letters = "アカサタナハ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => Math.random() * -100);
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = 0;
    const speed = 50;

    function draw(time: number) {
      if (time - lastTime < speed) {
        requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.fillStyle = "rgba(5, 10, 20, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.shadowBlur = 12;
      ctx.shadowColor = "#00f2ff";
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = "#00f2ff";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }

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
      className="
        fixed inset-0
        w-screen h-screen
        z-0
        pointer-events-none
        opacity-80
      "
    />
  );
}
