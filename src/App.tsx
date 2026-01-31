import { useState } from "react";
import MatrixBackground from "./components/effects/MatrixBackground";
import NoiseOverlay from "./components/effects/NoiseOverlay";
import { Dashboard } from "./pages/Dashboard";
import { Boot } from "./pages/Boot";

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* BACKGROUND LAYERS */}
      <MatrixBackground />
      <NoiseOverlay />

      {/* FOREGROUND */}
      <div className="relative z-20 w-full h-full">
        {booting ? (
          <Boot onFinish={() => setBooting(false)} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}
