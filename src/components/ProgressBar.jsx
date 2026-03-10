export default function ProgressBar({ value }) {
  return (
    <div className="h-3 w-full rounded-full bg-fuchsia-100 overflow-hidden ">
      <div
        className="h-3 rounded-full bg-fuchsia-800 transition-all duration-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}