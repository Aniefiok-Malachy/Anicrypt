import Container from "./Container.jsx";
import { site } from "../data.js";
import Aniphoto from "../assets/Ani.jpg";
import { FaTrophy, FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";

const icons = {
  trophy: <FaTrophy />,
  users: <FaUsers />,
  project: <FaProjectDiagram />,
  clock: <FaClock />,
};

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-400 overflow-x-hidden">
      <Container className="py-10 sm:py-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Hello, I am {site.name}
            </h1>

            <p className="mt-3 text-lg md:text-xl font-semibold text-fuchsia-800">
              {site.title}
            </p>

            <p className="mt-5 text-slate-600">{site.intro}</p>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-950">
              {site.specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.ctas.projects}
                className="rounded-lg bg-fuchsia-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View Projects
              </a>

              <a
                href={site.ctas.cv}
                className="rounded-lg border-2 border-fuchsia-800 px-5 py-2.5 text-sm font-semibold hover:bg-fuchsia-800 hover:text-white"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-700 hover:text-fuchsia-800"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-400 bg-slate-50 p-4 md:p-6">
            <div className="mt-4 rounded-xl bg-white p-3 shadow-sm">
              <div className="mt-3 h-full w-full rounded-lg bg-slate-100 overflow-hidden">
                <img
                  src={Aniphoto}
                  alt="Anicrypt Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:p-10">
          {site.stats.map((st) => (
            <div
              key={st.label}
              className="rounded-2xl bg-fuchsia-50 p-6 md:p-10 text-center border border-b-fuchsia-800 transition-shadow duration-200 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            >
              <div className="text-fuchsia-800 text-4xl md:text-6xl flex justify-center mb-3">
                {icons[st.icon]}
              </div>

              <div className="text-3xl md:text-5xl font-bold">{st.value}</div>

              <div className="text-slate-800 mt-1 text-sm md:text-base">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}