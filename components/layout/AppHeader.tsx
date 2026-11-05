"use client";

import { Menu, Search, Bell, ChevronDown } from "lucide-react";

import { usePathname } from "next/navigation";

interface AppHeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/my-tasks": "My Tasks",
};

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pageTitles[pathname]) {
      return pageTitles[pathname];
    }

    if (pathname === "/projects/new") {
      return "Create Project";
    }

    if (pathname.startsWith("/projects/")) {
      return "Project Details";
    }

    return "Workspace";
  };

  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-lg font-bold text-slate-800">{getPageTitle()}</h2>

          <p className="hidden text-xs text-slate-400 sm:block">
            Workspace / {getPageTitle()}
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search */}
        <div className="hidden w-56 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
          <Search size={17} className="text-slate-400" />

          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search anything"
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
            /
          </kbd>
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>

        {/* User profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-slate-100"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
            VW
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-700">Vinesh</p>

            <p className="text-[11px] text-slate-400">Administrator</p>
          </div>

          <ChevronDown size={16} className="hidden text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  );
}
