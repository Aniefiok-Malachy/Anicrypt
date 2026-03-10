import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "./Container.jsx";
import { site } from "../data.js";

export default function Contact() {
  const c = site.contact;
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Message failed to send. Please try again.",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-400 bg-slate-50 overflow-x-hidden"
    >
      <Container className="py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-fuchsia-800">Me</span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-400 bg-zinc-100 p-4 md:p-8 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-800">
              Send Me a Message
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Fill the form below and the message will be sent directly to my
              email.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Full Name
                </span>
                <input
                  type="text"
                  name="user_name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-800 focus:ring-2 focus:ring-fuchsia-200"
                  placeholder="Enter name"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Email Address
                </span>
                <input
                  type="email"
                  name="user_email"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-800 focus:ring-2 focus:ring-fuchsia-200"
                  placeholder="Enter email"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-800 focus:ring-2 focus:ring-fuchsia-200"
                  placeholder="Subject"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="5"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-800 focus:ring-2 focus:ring-fuchsia-200"
                  placeholder="Write message"
                  required
                />
              </label>

              {status.message && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-700"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-fuchsia-800 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-fuchsia-900 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-400 bg-zinc-100 p-4 md:p-8 transition-all duration-300 md:hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
            <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-800">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-slate-300 bg-white p-4">
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <p className="mt-1 font-semibold text-slate-900">{c.email}</p>
              </div>

              <div className="rounded-xl border border-slate-300 bg-white p-4">
                <p className="text-sm font-semibold text-slate-500">Location</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {c.location}
                </p>
              </div>

              <div className="rounded-xl border border-slate-300 bg-white p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Connect With Me
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-fuchsia-800 bg-white px-4 py-2.5 text-sm font-semibold text-fuchsia-800 transition-all duration-200 hover:bg-fuchsia-800 hover:text-white"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-300 bg-white p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Download Resume
                </p>
                <a
                  href={site.ctas.cv}
                  target="_blank"
                  
                  className="mt-3 inline-flex rounded-xl bg-fuchsia-800 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-fuchsia-900 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}