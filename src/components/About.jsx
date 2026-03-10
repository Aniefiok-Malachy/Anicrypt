import Container from "./Container.jsx";
import { site } from "../data.js";

export default function About() {
  const a = site.about;

  return (
    <section id="about" className="overflow-x-hidden">
      <Container className="py-14 w-full sm:py-20">
        <h1 className="text-4xl md:text-6xl text-center mb-10 font-bold">
          About <span className="text-fuchsia-800">Me</span>
        </h1>

        <div className="grid gap-10 lg:grid-cols-1 mt-5">
          <div>
            <h3 className="text-2xl md:text-4xl text-fuchsia-800 font-bold">
              {a.heading}
            </h3>
            <p className="mt-3 text-slate-600">{a.bio}</p>

            <h4 className="mt-6 text-2xl md:text-3xl text-fuchsia-800 font-bold">
              What I Do
            </h4>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-900">
              {a.whatIDo.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <h4 className="mt-6 text-2xl md:text-3xl text-fuchsia-800 font-bold">
              My Goal
            </h4>
            <p className="mt-3 text-slate-600">{a.goal}</p>

            <a
              href={a.resumeHref}
              target="_blank"
              className="mt-6 inline-flex rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-fuchsia-800 transition-all duration-200 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            >
              Download Full Resume
            </a>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl w-full border p-4 md:p-6 bg-zinc-100 border-b-fuchsia-800 transition-shadow duration-200 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
              <h4 className="text-3xl text-fuchsia-800 md:text-5xl font-bold">Education</h4>
              <p className="mt-2 font-semibold text-2xl md:text-3xl">
                {a.education.degree}
              </p>
              <p className="text-fuchsia-800">{a.education.school}</p>
              <p className="mt-2 text-slate-600 font-bold">
                {a.education.graduation}
              </p>
              <p className="mt-3 text-slate-900">{a.education.focus}</p>
            </div>
          </div>

          <div className="mt-10 p-4 md:p-10 rounded-2xl border border-slate-400 bg-zinc-100 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
            <h4 className="text-3xl md:text-5xl text-fuchsia-800 text-center font-bold mb-6">
              Key Achievements
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {a.achievements.map((x) => (
                <div
                  key={x.title}
                  className="rounded-xl border border-slate-400 p-5 bg-white transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                >
                  <p className="text-lg md:text-xl text-fuchsia-800 font-semibold">
                    {x.title}
                  </p>
                  <p className="mt-2 text-slate-900">{x.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl border bg-zinc-100 mt-10 border-slate-400 p-4 md:p-6 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
          <h4 className="text-lg font-bold">Languages</h4>
          <div className="mt-4 space-y-3">
            {a.languages.map((l) => (
              <div key={l.name} className="flex items-center justify-between">
                <span className="text-xl md:text-2xl font-bold">{l.name}</span>
                <span className="text-slate-900 font-bold">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}