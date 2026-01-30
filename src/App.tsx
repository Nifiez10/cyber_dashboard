import { useState } from "react";
import MatrixBackground from "./components/effects/MatrixBackground";
import NoiseOverlay from "./components/effects/NoiseOverlay";
import { Dashboard } from "./pages/Dashboard";
import { Boot } from "./pages/Boot";

export default function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {/* BACKGROUND */}
      <MatrixBackground />
      <NoiseOverlay />

      {/* FOREGROUND */}
      {booting ? <Boot onFinish={() => setBooting(false)} /> : <Dashboard />}
    </>
  );
}
