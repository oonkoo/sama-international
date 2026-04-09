const clients = [
  "NEOM",
  "Saudi Aramco",
  "Red Sea Global",
  "SABIC",
  "MA'ADEN",
  "Nesma & Partners",
  "Saudi Binladin Group",
  "Tamimi Global",
  "MOMRA",
  "Ministry of Culture",
  "National Water Co.",
  "SINOPEC",
  "Al-Bawani",
  "Royal Commission",
  "Jabal Omar",
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-4 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with Saudi Arabia&apos;s most prestigious government and private
            organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-24 border border-gray-100 hover:shadow-lg hover:border-[#1a365d]/20 transition-all group"
            >
              <span className="text-gray-600 font-medium text-center text-sm group-hover:text-[#1a365d] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
