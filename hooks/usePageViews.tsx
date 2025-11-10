"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function usePageViews() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      });
    }
  }, [pathname]);
}
