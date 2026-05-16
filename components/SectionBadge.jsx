import { HiSparkles } from "react-icons/hi2";

export default function SectionBadge({
  label = "",
  icon = "",
  className = "",
}) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary shadow-[0_12px_35px_rgba(44,58,131,0.12)] backdrop-blur-xl ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm">
        {icon}
      </span>

      {label}
    </span>
  );
}
