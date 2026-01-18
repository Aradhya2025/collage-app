export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">About Nightingale College</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
          Nightingale College is dedicated to practical, industry-aligned technical
          education. Our curriculum mixes live instruction, lab-based projects,
          and employer partnerships. We focus on measurable outcomes — portfolios,
          certifications, and placement readiness.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg bg-white/60 dark:bg-black/40">
            <h3 className="font-semibold">Hands-on Labs</h3>
            <p className="text-sm text-neutral-600">Project-based learning in small cohorts.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white/60 dark:bg-black/40">
            <h3 className="font-semibold">Career Services</h3>
            <p className="text-sm text-neutral-600">Resume, interview and employer connections.</p>
          </div>
          <div className="p-4 border rounded-lg bg-white/60 dark:bg-black/40">
            <h3 className="font-semibold">Certified Instructors</h3>
            <p className="text-sm text-neutral-600">Instructors with real-world experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
