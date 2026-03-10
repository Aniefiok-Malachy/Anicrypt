import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";
import ProgressBar from "./ProgressBar.jsx";
import { site } from "../data.js";

export default function Skills() {
  const s = site.skills;

  return (
    <section id="skills" className="border-t border-slate-400 overflow-x-hidden">
      <Container className="py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="text-fuchsia-800">Skills</span>
          </h1>
          <p className="mt-3 text-slate-600 font-bold text-3xl ">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-400 bg-zinc-100 p-4 md:p-6 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
            <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-800">
              Technical Skills
            </h3>

            <div className="mt-5 space-y-5">
              {s.technical.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-slate-300 bg-white p-4 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_16px_rgba(168,85,247,0.5)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-900 text-sm md:text-base">
                      {t.name}
                    </span>
                    <span className="text-sm font-bold text-fuchsia-800">
                      {t.value}%
                    </span>
                  </div>

                  <div className="mt-3">
                    <ProgressBar value={t.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-400 bg-zinc-100 p-4 md:p-6 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
            <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-800">
              Soft Skills
            </h3>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.soft.map((x) => (
                <div
                  key={x.name}
                  className="rounded-xl border border-slate-300 bg-white p-4 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_16px_rgba(168,85,247,0.5)]"
                >
                  <p className="font-semibold text-fuchsia-800 text-lg">
                    {x.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {x.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}