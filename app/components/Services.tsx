export default function Services() {
  const services = [
    { title: "Full-Stack Web Development", desc: "6-month immersive program" },
    { title: "Cloud & DevOps", desc: "Hands-on cloud engineering" },
    { title: "Data Science & AI", desc: "Tooling, pipelines, and models" },
    { title: "Cybersecurity", desc: "Real-world defensive training" },
  ];

  return (
    <section id="services" className="py-12 bg-neutral-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Programs & Services</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Practical training and career services focused on placement.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="p-4 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
