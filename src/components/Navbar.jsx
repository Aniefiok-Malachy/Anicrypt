import { useState } from "react";
import Container from "./Container.jsx";
import Anicrypt from "../assets/Anicrypt.jpg";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight"
        >
          <img
            src={Anicrypt}
            alt="Anicrypt Logo"
            className="w-8 h-8 object-contain rounded-full"
          />
          Anicrypt <span className="text-fuchsia-800">Malachy</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg font-medium text-slate-700 hover:text-fuchsia-800"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 hover:text-fuchsia-800 hover:border-fuchsia-800 transition"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </Container>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <Container className="py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-fuchsia-800"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-fit rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get in touch
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}