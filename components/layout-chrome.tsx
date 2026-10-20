"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/header";

const MINIMAL_PATHS = new Set(["/ecossistema", "/organizacoes"]);

export default function LayoutChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const minimal = MINIMAL_PATHS.has(pathname);

  if (minimal) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
