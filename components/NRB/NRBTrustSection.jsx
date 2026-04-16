export default function NRBTrustSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">
          Why Investors Trust Anondo Bhubon
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">Ready Land</h3>
            <p className="text-gray-500 mt-2">
              No future promises — physically available plots
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">Instant Registration</h3>
            <p className="text-gray-500 mt-2">Buy today, legally own today</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-bold text-lg">Zero Risk</h3>
            <p className="text-gray-500 mt-2">
              Verified land with full documentation support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
