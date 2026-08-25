import { Outlet } from "@tanstack/react-router";
import { Header } from "../../features/navigation/Header";
import { MobileMenu } from "../../features/navigation/MobileMenu";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[95] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-xs focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <MobileMenu />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
