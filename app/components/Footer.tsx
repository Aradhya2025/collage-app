import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 dark:border-neutral-800 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="logo" className="h-10 w-10" />
            <div>
              <div className="font-semibold">Nightingale College</div>
              <div className="text-sm text-neutral-600">Institute for Technical Education</div>
            </div>
          </div>
        </div>

        <div className="text-sm text-neutral-600">
          <div>© {new Date().getFullYear()} Nightingale College. All rights reserved.</div>
          <div className="mt-2">Contact: <a href="mailto:ops@rigteq.com" className="text-rose-600">ops@rigteq.com</a></div>
        </div>
      </div>
    </footer>
  );
}
