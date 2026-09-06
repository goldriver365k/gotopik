"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useLang } from "@/hooks/useLang";
import { t, type UiTextKey } from "@/lib/i18n";

type NavItem = {
  href: string;
  labelKey: UiTextKey;
  icon: ReactNode;
};

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/home",
    labelKey: "navHome",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    href: "/study",
    labelKey: "navStudy",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
        <path d="M4 18a2.5 2.5 0 0 1 2.5-2.5H20" />
      </svg>
    ),
  },
  {
    href: "/test",
    labelKey: "navTest",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 11.5 11 13.5 15 9" />
        <rect x="4" y="4" width="16" height="16" rx="3" />
      </svg>
    ),
  },
  {
    href: "/my",
    labelKey: "navMy",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </svg>
    ),
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const lang = useLang();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const label = t(item.labelKey, lang);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
            >
              <span className={isActive ? "text-mint" : "text-muted"}>{item.icon}</span>
              <span className={isActive ? "text-mint" : "text-muted"}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
