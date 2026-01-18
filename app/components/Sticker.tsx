"use client";
export default function Sticker() {
  return (
    <div>
      {/* WhatsApp */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed right-4 bottom-40 z-50 bg-green-500 p-3 rounded-full shadow-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2h-1l-2 2v-2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8l2 2V7h1a2 2 0 0 1 2 2z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Call */}
      <a href="tel:+919999999999" className="fixed right-4 bottom-4 z-50 bg-rose-600 p-3 rounded-full shadow-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 16.92V21a1 1 0 0 1-1.11.99A19 19 0 0 1 3 5.11 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75c.12.66.36 1.3.7 1.89a1 1 0 0 1-.25 1.09L8.91 9.91a12 12 0 0 0 5.19 5.19l1.18-1.18a1 1 0 0 1 1.09-.25c.59.34 1.23.58 1.89.7a1 1 0 0 1 .75 1V22z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
