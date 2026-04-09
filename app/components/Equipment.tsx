const equipmentCategories = [
  {
    title: "Earthmoving Equipment",
    items: ["Excavators", "Bulldozers", "Graders", "Backhoe Loaders"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Concrete Works",
    items: ["Batching Plants", "Concrete Pumps", "Mixers", "Vibrators"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: "Lifting Equipment",
    items: ["Mobile Cranes", "Forklifts", "Hoisting Systems"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>
    ),
  },
  {
    title: "Transportation Fleet",
    items: ["Dump Trucks", "Flatbed Trailers", "Service Vehicles"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "MEP Tools",
    items: ["Electrical Testing", "HVAC Installation", "Plumbing Equipment"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Support Equipment",
    items: ["Generators", "Compressors", "Scaffolding", "Site Offices"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Equipment() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Equipment & Resources
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern fleet and skilled workforce to execute projects of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#fafbfc] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#1a365d] rounded-lg flex items-center justify-center mb-4 text-white">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#d4a853] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Workforce Note */}
        <div className="mt-12 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Skilled Workforce</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Our team includes experienced engineers, project managers, certified operators, and
            skilled technicians who undergo continuous training in construction quality, safety, and
            technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
