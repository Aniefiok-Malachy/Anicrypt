import Container from "./Container.jsx";
import { site } from "../data.js";

export default function Pastprojects() {
  return (
    <section
      id="past-projects"
      className="border-t border-slate-400 bg-slate-50 overflow-x-hidden"
    >
      <Container className="py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Past <span className="text-fuchsia-800">Projects</span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            My Previous work and achievements
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {site.pastprojects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-400 bg-zinc-100 p-4 md:p-6 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            >
                <div className="h-48 mb-4 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
                
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-fuchsia-800">
                  {p.title}
                </h3>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-fuchsia-800 px-3 py-1 text-sm font-semibold text-fuchsia-800 transition-all duration-200 hover:bg-fuchsia-800 hover:text-white"
                >
                  Visit
                </a>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-800">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}