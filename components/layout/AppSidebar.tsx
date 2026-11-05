"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
  CircleHelp,
  ChevronRight,
  Plus,
  X,
} from "lucide-react";

import Logo from "@/components/shared/Logo";

interface AppSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const navigation = [
  {
    label: "Workspace",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Projects",
        href: "/projects",
        icon: FolderKanban,
      },
      {
        name: "My Tasks",
        href: "/my-tasks",
        icon: CheckSquare,
      },
    ],
  },
];

export default function AppSidebar({ mobileOpen, onClose }: AppSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-[260px] flex-col
          border-r border-slate-800
          bg-[#111827] text-slate-300
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar top */}
        <div className="flex h-[76px] items-center justify-between border-b border-slate-800 px-5">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Workspace selector */}
        <div className="px-4 pt-6">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 p-3 text-left hover:bg-slate-800"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">
              W
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                WorkBoard Team
              </p>

              <p className="text-xs text-slate-400">Free workspace</p>
            </div>

            <ChevronRight size={16} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-7">
          {navigation.map((group) => (
            <div key={group.label}>
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-slate-500">
                {group.label}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`
                        group flex items-center gap-3
                        rounded-lg px-3 py-2.5
                        text-sm font-medium transition-colors
                        ${
                          active
                            ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                        }
                      `}
                    >
                      <Icon size={19} />

                      <span>{item.name}</span>

                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick action */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.5px] text-slate-500">
              Quick Actions
            </p>

            <Link
              href="/projects/new"
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Plus size={19} />
              Create Project
            </Link>
          </div>
        </nav>

        {/* Sidebar bottom */}
        <div className="space-y-1 border-t border-slate-800 p-4">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </Link>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <CircleHelp size={18} />
            Help & Support
          </button>

          <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-800/70 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
              VW
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                Vinesh Wadhwani
              </p>

              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
