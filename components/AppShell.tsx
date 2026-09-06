"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import BottomNavigation from "@/components/BottomNavigation";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudyScreen = pathname.startsWith("/study/") && pathname !== "/study";
  const isDiagnosticScreen = pathname.startsWith("/diagnostic");
  const hideChrome =
    pathname === "/" || pathname === "/language" || isStudyScreen || isDiagnosticScreen;

  return (
    <>
      <div
        className={`mx-auto flex w-full max-w-md flex-1 flex-col ${hideChrome ? "" : "pb-20"}`}
      >
        {children}
      </div>
      {hideChrome ? null : <BottomNavigation />}
    </>
  );
}
