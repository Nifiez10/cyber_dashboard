export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] opacity-[0.06]"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,
          <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
            <filter id='n'>
              <feTurbulence type='fractalNoise' baseFrequency='0.8'/>
            </filter>
            <rect width='120' height='120' filter='url(%23n)'/>
          </svg>
        ")`,
      }}
    />
  );
}
