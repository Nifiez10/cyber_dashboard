import { useState } from "react";

import { Navbar } from "../components/layout/Navbar";
import { Topbar } from "../components/layout/Topbar";

import { ProfileCard } from "../components/ui/ProfileCard";
import { Card } from "../components/ui/Card";
import { Terminal } from "../components/ui/Terminal";
import { Timeline } from "../components/ui/Timeline";
import { SystemActivity } from "../components/ui/SystemActivity";

import { PageEnter } from "../components/effects/PageEnter";

type Page = "dashboard" | "activity" | "terminal";

export function Dashboard() {
  const [page, setPage] = useState<Page>("dashboard");

  return (
    <div className="relative z-20 text-cyan-400">
      {/* NAVBAR */}
      <Navbar active={page} onChange={setPage} />

      <div className="ml-16 h-screen flex flex-col">
        <Topbar />

        <main className="flex-1 px-4 md:px-10 py-8 overflow-y-auto">
          {/* ================= DASHBOARD UTAMA ================= */}
          {page === "dashboard" && (
            <PageEnter>
              <div className="space-y-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                  <div className="w-full lg:w-auto flex justify-center lg:block lg:sticky lg:top-20">
                    <ProfileCard />
                  </div>

                  <div className="flex-1 space-y-8 w-full">
                    <Card title="Introducing">
                      <h2 className="text-2xl font-bold text-cyan-400 mb-4 tracking-widest uppercase italic">
                        About Me
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm font-mono">
                        Welcome to my digital dashboard. I am{" "}
                        <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30">
                          Ahmad Hanif Musthofa
                        </span>
                        , a student from SMKN 1 Banyumas with a strong interest
                        in IT architecture. I enjoy exploring how systems work
                        and turning ideas into functional digital experiences.
                        This dashboard represents my learning journey, where I
                        document progress, experiment with new technologies, and
                        continuously improve my skills in the IT field.
                      </p>
                    </Card>

                    <Card title="EDUCATION">
                      <Timeline />
                    </Card>
                  </div>
                </div>
              </div>
            </PageEnter>
          )}

          {/* ================= DASHBOARD ACTIVITY ================= */}
          {page === "activity" && (
            <PageEnter>
              <SystemActivity />
            </PageEnter>
          )}

          {/* ================= TERMINAL PAGE ================= */}
          {page === "terminal" && (
            <PageEnter>
              <div className="h-full">
                <Card title="SYSTEM_TERMINAL">
                  <Terminal />
                </Card>
              </div>
            </PageEnter>
          )}
        </main>
      </div>
    </div>
  );
}
