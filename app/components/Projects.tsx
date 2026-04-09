import Image from "next/image";

const projects = [
  {
    title: "NEOM Community Expansion II",
    location: "Sharma, NEOM",
    client: "Tamimi Global Co. Ltd.",
    category: "Mega Project",
    status: "Completed",
    description: "Large-scale community development contributing to NEOM's sustainable future city vision.",
    tags: ["Civil Works", "MEP"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    featured: true,
  },
  {
    title: "CEER EV Manufacturing",
    location: "King Abdullah Economic City",
    client: "CEER",
    category: "Industrial",
    status: "Ongoing",
    description: "Saudi Arabia's first electric vehicle manufacturing facility.",
    tags: ["Industrial", "MEP"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    featured: true,
  },
  {
    title: "Triple Bay Workers Village",
    location: "AMAALA, Red Sea",
    client: "Tamimi Global Co. Ltd.",
    category: "Infrastructure",
    status: "Completed",
    description: "Construction workers village for the AMAALA luxury resort development.",
    tags: ["Civil Works", "MEP"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    featured: false,
  },
  {
    title: "Delta Marriott Hotel",
    location: "Ash Shati, Jeddah",
    client: "Marriott International",
    category: "Hospitality",
    status: "Ongoing",
    description: "Premium hotel development supporting Saudi tourism growth.",
    tags: ["Hospitality", "Fit-out"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    featured: false,
  },
  {
    title: "Umluj Airport Project",
    location: "Umluj, Red Sea",
    client: "Nesma & Partners",
    category: "Aviation",
    status: "Completed",
    description: "Airport infrastructure development supporting Red Sea tourism.",
    tags: ["Civil Works", "MEP"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    featured: false,
  },
  {
    title: "NEOM Worker Bay Village",
    location: "NEOM",
    client: "Tamimi Global Co. Ltd.",
    category: "Infrastructure",
    status: "Completed",
    description: "Worker accommodation facilities supporting NEOM's construction workforce.",
    tags: ["Civil Works", "MEP"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d4a853]"></div>
              <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a365d] leading-tight">
              Recent Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#1a365d] font-semibold hover:gap-4 transition-all"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Featured Projects - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                      project.status === "Ongoing"
                        ? "bg-[#d4a853] text-[#1a365d]"
                        : "bg-[#059669] text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/90 text-[#1a365d] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-[#1a365d] group-hover:text-[#d4a853] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a853] transition-colors">
                    <svg
                      className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#1a365d]/5 text-[#1a365d] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">Client: {project.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Smaller Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:border-[#d4a853]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Status */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`w-3 h-3 rounded-full inline-block ${
                      project.status === "Ongoing" ? "bg-[#d4a853]" : "bg-[#059669]"
                    }`}
                    title={project.status}
                  ></span>
                </div>

                {/* Category */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-[#1a365d] mb-1 group-hover:text-[#d4a853] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="line-clamp-1">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "6", label: "Mega Projects" },
            { value: "2", label: "Ongoing Projects" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#d4a853]/30 hover:shadow-lg transition-all text-center"
            >
              <p className="text-3xl font-bold text-[#1a365d] mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
