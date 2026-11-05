import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

interface LogoProps {
  collapsed?: boolean;
}

export default function Logo({ collapsed = false }: LogoProps) {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
        <LayoutDashboard size={21} />
      </div>

      {!collapsed && (
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            WorkBoard
          </h1>

          <p className="text-[10px] uppercase tracking-[2px] text-slate-400">
            Project workspace
          </p>
        </div>
      )}
    </Link>
  );
}
