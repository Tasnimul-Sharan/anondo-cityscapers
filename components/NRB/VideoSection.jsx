export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          See the Project & Registration Process
        </h2>

        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Project Video"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
