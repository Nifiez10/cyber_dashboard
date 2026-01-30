export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900/80 backdrop-blur border-r border-cyan-500/20 flex flex-col justify-between p-6">
      <div>
        <h1 className="text-xl font-bold tracking-widest text-cyan-400 mb-8">
          NEON_SYS
        </h1>

        <nav className="space-y-4 text-sm">
          <p className="text-cyan-300/60">NAVIGATION</p>
          <ul className="space-y-3">
            <li className="hover:text-cyan-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-cyan-300 cursor-pointer">Projects</li>
            <li className="hover:text-cyan-300 cursor-pointer">Logs</li>
            <li className="hover:text-cyan-300 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </div>

      <div className="text-xs text-green-400">● SYSTEM ONLINE</div>
    </aside>
  );
}
