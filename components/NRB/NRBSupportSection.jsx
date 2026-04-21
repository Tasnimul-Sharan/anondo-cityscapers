export default function NRBSupportSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Full Support for NRBs
          </h2>

          <ul className="space-y-4 text-lg text-gray-600">
            <li>✅ Dedicated WhatsApp Support</li>
            <li>✅ Video Call Consultation</li>
            <li>✅ Document Processing Help</li>
            <li>✅ Family Coordination in Bangladesh</li>
          </ul>
        </div>

        {/* Right */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Talk to Our Expert</h3>
          <p className="text-gray-500 mb-6">
            Get guidance from anywhere in the world.
          </p>

          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
