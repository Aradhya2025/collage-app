"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 backdrop-blur-sm bg-white/70 dark:bg-black/60 border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Nightingale College" className="h-10 w-10" />
          <div className="hidden sm:block">
            <div className="text-lg font-semibold">Nightingale College</div>
            <div className="text-xs text-neutral-600">Institute for Technical Education</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-rose-600">About</a>
          <a href="#services" className="hover:text-rose-600">Services</a>
          <a href="#gallery" className="hover:text-rose-600">Gallery</a>
          <a href="#videos" className="hover:text-rose-600">Videos</a>
          <a href="#contact" className="rounded-full px-4 py-2 bg-rose-600 text-white">Enquire</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="open menu" className="p-2 rounded-md border">Menu</button>
        </div>
      </div>
    </header>
  );
}
