const docs = [
  "Passport Copy",
  "NID (Optional)",
  "Photographs",
  "Power of Attorney (if needed)",
];

export default function DocumentsSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Required Documents
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-2xl mb-2">📄</div>
              <p className="font-medium">{doc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
