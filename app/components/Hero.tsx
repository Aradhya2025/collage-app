"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const el = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal--visible");
        });
      },
      { threshold: 0.15 }
    );
    el.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
          <div className="reveal opacity-0 transform transition-all duration-700">
            <div className="text-sm uppercase text-rose-600 tracking-wider">Institute for Technical Education</div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              Nightingale College
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-xl">
              A modern institute focused on hands-on technical training, career-ready
              certifications, and industry-aligned learning pathways. Join small
              cohorts, learn from experienced instructors, and step confidently into
              the tech workforce.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <a href="#contact" className="px-5 py-3 rounded-full bg-rose-600 text-white font-semibold">Apply Now</a>
              <a href="#services" className="px-5 py-3 rounded-full border">Our Programs</a>
            </div>
          </div>

          <div className="reveal opacity-0 transform transition-all duration-700">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/hero-1.svg" alt="campus" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
