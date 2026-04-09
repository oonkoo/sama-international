export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Trusted Construction & Facility Management Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SAMA Service Company Ltd. has been a trusted name in the Saudi construction and
              facility management sector since 2019. With a strong foundation built on integrity,
              technical excellence, and client-focused solutions, we deliver comprehensive services
              that meet the diverse needs of our clients.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Headquartered in Jeddah, we combine expertise, innovation, and dedication to provide
              complete solutions for complex projects across the Kingdom.
            </p>

            {/* Registration Info */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200">
                <span className="text-gray-500 text-sm">CR No.</span>
                <p className="font-semibold text-[#1a365d]">4030396920</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-200">
                <span className="text-gray-500 text-sm">VAT No.</span>
                <p className="font-semibold text-[#1a365d]">311395866700003</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-2">2019</p>
              <p className="text-gray-600">Established</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-2">50+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-2">200+</p>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <p className="text-4xl sm:text-5xl font-bold text-[#1a365d] mb-2">15+</p>
              <p className="text-gray-600">Major Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
