const certifications = [
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "ISO 45001", desc: "Health & Safety" },
  { name: "ISO 14001", desc: "Environmental" },
  { name: "Saudi Building Code", desc: "SBC Compliant" },
  { name: "MEP Standards", desc: "Certified" },
  { name: "HSE Policy", desc: "Implemented" },
];

export default function Certifications() {
  return (
    <section className="py-16 px-4 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Safety, Quality & Compliance
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Adhering to the highest safety standards and international quality certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
            >
              <div className="w-12 h-12 bg-[#d4a853] rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-[#1a365d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm">{cert.name}</p>
              <p className="text-blue-200 text-xs mt-1">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
