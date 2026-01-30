export function Timeline() {
  const education = [
    {
      year: "2014 – 2020",
      title: "MI AL-Huda Selanegara",
      desc: "Built the foundation of learning and curiosity in technology.",
    },
    {
      year: "2020 – 2023",
      title: "Mts Maarif NU 1 Sumpiuh",
      desc: "Started exploring computers, networking, and basic programming.",
    },
    {
      year: "2023 – Present",
      title: "SMKN 1 Banyumas",
      desc: "Focused on Cyber Security, Web Development, and System Administration.",
    },
  ];

  return (
    <div>
      {/* TITLE */}
      <div className="mb-5 text-xl font-semibold tracking-widest text-cyan-300">
        EDUCATION_PATH
      </div>

      {/* TIMELINE */}
      <ul className="relative pl-6 space-y-6">
        {/* LINE */}
        <div className="absolute left-[7px] top-0 h-full w-px bg-cyan-400/30" />

        {education.map((item, i) => (
          <li key={i} className="relative flex items-start gap-4">
            {/* DOT */}
            <span
              className="
                mt-1 w-3 h-3 rounded-full
                bg-cyan-400
                shadow-[0_0_12px_rgba(0,200,255,0.9)]
                flex-shrink-0
              "
            />

            {/* CONTENT */}
            <div className="space-y-1">
              <div className="text-xs tracking-widest text-cyan-400/70">
                {item.year}
              </div>

              <div className="text-sm font-semibold text-cyan-300">
                {item.title}
              </div>

              <p className="text-sm text-cyan-300/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
