"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-X1952M7X12", { page_title: pathname });
      console.log(`Logged view ${pathname}`);
    }
  }, [pathname]);

  return null;
}
