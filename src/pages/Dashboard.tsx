import { Navbar } from "../components/layout/Navbar";
import { Topbar } from "../components/layout/Topbar";
import { ProfileCard } from "../components/ui/ProfileCard";
import { Card } from "../components/ui/Card";
import { Terminal } from "../components/ui/Terminal";
import { Timeline } from "../components/ui/Timeline";

export function Dashboard() {
  return (
    <div className="relative z-20 text-cyan-400">
      <Navbar />

      <div className="ml-16 h-screen flex flex-col">
        <Topbar />

        {/* Padding dikurangi sedikit di mobile (px-4) agar tidak terlalu sempit */}
        <main className="flex-1 px-4 md:px-10 py-8 space-y-8 overflow-y-auto">
          {/* KONTAINER UTAMA */}
          {/* items-center: membuat profil di tengah saat layar HP */}
          {/* lg:items-start: membuat profil di kiri saat layar Desktop */}
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* SISI KIRI: Profile Card */}
            {/* w-full + justify-center: memaksa ProfileCard ke tengah layar mobile */}
            <div className="w-full lg:w-auto flex justify-center lg:block lg:sticky lg:top-0">
              <ProfileCard />
            </div>

            {/* SISI KANAN: About & Education Path */}
            <div className="flex-1 space-y-8 w-full">
              {/* ABOUT */}
              <Card title="Introducing">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 tracking-widest uppercase italic">
                  About Me
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm font-mono">
                  Welcome to my digital dashboard. I am{" "}
                  <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30">
                    Ahmad Hanif Musthofa
                  </span>
                  , a student from SMKN 1 Banyumas with a strong interest in IT
                  architecture. I enjoy exploring how systems work and turning
                  ideas into functional digital experiences. This dashboard
                  represents my learning journey, where I document progress,
                  experiment with new technologies, and continuously improve my
                  skills in the IT field.
                </p>
              </Card>

              {/* EDUCATION PATH / ACTIVITY LOG */}
              <Card title="EDUCATION_PATH">
                <Timeline />
              </Card>
            </div>
          </div>

          {/* TERMINAL - TETAP DI BAWAH (FULL WIDTH) */}
          <div className="w-full">
            <Card title="SYSTEM_TERMINAL">
              <Terminal />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
