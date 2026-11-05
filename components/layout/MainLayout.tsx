"use client";

import { useState } from "react";

import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openSidebar = () => {
    setMobileOpen(true);
  };

  const closeSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <AppSidebar mobileOpen={mobileOpen} onClose={closeSidebar} />

      {/* Main application area */}
      <div className="min-h-screen lg:pl-[260px]">
        {/* Header */}
        <AppHeader onMenuClick={openSidebar} />

        {/* Current page content */}
        <main className="min-h-[calc(100vh-76px)] p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1500px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
