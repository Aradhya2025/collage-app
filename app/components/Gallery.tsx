export default function Gallery() {
  const images = ["/gallery-1.svg", "/gallery-2.svg", "/gallery-3.svg", "/gallery-4.svg", "/gallery-5.svg"];
  return (
    <section id="gallery" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Photo Gallery</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Snapshots from our classrooms and labs.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src) => (
            <div key={src} className="rounded-lg overflow-hidden shadow">
              <img src={src} alt="gallery" className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
