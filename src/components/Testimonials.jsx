import Container from "./Container.jsx";
import { site } from "../data.js";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-slate-400 bg-slate-50 overflow-x-hidden"
    >
      <Container className="py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Client <span className="text-fuchsia-800">Testimonials</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {site.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-slate-300 bg-zinc-100 p-6 md:p-8 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              <div className="text-6xl leading-none text-fuchsia-800 ">“</div>
              <blockquote className="text-slate-800 italic text-base md:text-lg leading-relaxed min-height:140px">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-b-fuchsia-800 object-cover"
                />

                <div>
                  <div className="text-xl font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-600">{t.role}</div>

                  <div className="mt-2 flex text-fuchsia-800">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}