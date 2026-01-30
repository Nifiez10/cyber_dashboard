export function initMatrixBackground() {
  const canvas = document.createElement("canvas");
  canvas.id = "matrix-bg";

  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "-10";
  canvas.style.pointerEvents = "none";

  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d")!;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const chars = "NEON_SYS_01@#$%";
  const fontSize = 16;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(0);

  function draw() {
    // 🔴 INI KUNCI: JANGAN FULL CLEAR
    ctx.fillStyle = "rgba(2,6,23,0.05)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = "rgba(34,211,238,0.6)";

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}
