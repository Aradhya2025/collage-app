export default function Videos() {
  const vids = [
    { id: 'YOUTUBE_ID_1', title: 'How to choose a technical college' },
    { id: 'YOUTUBE_ID_2', title: 'Career paths in tech' },
    { id: 'YOUTUBE_ID_3', title: 'Inside our labs' },
  ];

  return (
    <section id="videos" className="py-12 bg-neutral-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Video Highlights</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Selected videos to help you learn more about our approach and student outcomes.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vids.map((v) => (
            <div key={v.id} className="rounded-lg overflow-hidden border">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3">
                <div className="font-semibold">{v.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
