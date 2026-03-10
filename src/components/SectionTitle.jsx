export default function SectionTitle({ kicker, title, subtitle }) {
    return (
      <div className="mb-8">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
      </div>
    );
  }