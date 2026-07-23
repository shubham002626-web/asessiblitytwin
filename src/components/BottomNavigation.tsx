"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileUp, LayoutDashboard, Map as MapIcon } from "lucide-react";

export function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Analyze", icon: FileUp, href: "/analyze" },
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Map", icon: MapIcon, href: "/map" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-slate-100 pb-safe">
      <div className="max-w-6xl mx-auto w-full flex justify-between md:justify-center md:gap-16 items-center px-4 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-[72px] py-1.5 rounded-3xl transition-all ${
                isActive ? "bg-blue-600 text-white" : "text-slate-600 hover:text-slate-900 bg-transparent"
              }`}
            >
              <item.icon size={20} className="mb-0.5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
