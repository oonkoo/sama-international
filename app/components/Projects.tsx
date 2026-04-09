const projects = [
  {
    title: "NEOM Community Expansion II",
    description:
      "Large-scale community development in Sharma for NEOM's sustainable future city vision.",
    client: "Tamimi Global Co. Ltd.",
    tags: ["Civil Works", "MEP"],
    status: "Completed",
    category: "NEOM",
    gradient: "from-[#1a365d] to-[#2d4a7c]",
    categoryColor: "text-[#d4a853]",
  },
  {
    title: "Triple Bay Workers Village",
    description: "Construction workers village for the AMAALA luxury resort development project.",
    client: "Tamimi Global Co. Ltd.",
    tags: ["Civil Works", "MEP"],
    status: "Completed",
    category: "Red Sea Global",
    gradient: "from-[#059669] to-[#10b981]",
    categoryColor: "text-white",
  },
  {
    title: "NEOM Worker Bay Village",
    description: "Worker accommodation facilities supporting NEOM's construction workforce.",
    client: "Tamimi Global Co. Ltd.",
    tags: ["Civil Works", "MEP"],
    status: "Completed",
    category: "NEOM",
    gradient: "from-[#1a365d] to-[#2d4a7c]",
    categoryColor: "text-[#d4a853]",
  },
  {
    title: "Umluj Airport Project",
    description: "Airport infrastructure development supporting Red Sea tourism growth.",
    client: "Nesma & Partners",
    tags: ["Civil Works", "MEP"],
    status: "Completed",
    category: "Aviation",
    gradient: "from-[#d4a853] to-[#e8c878]",
    categoryColor: "text-[#1a365d]",
  },
  {
    title: "CEER EV Manufacturing Site",
    description:
      "Saudi Arabia's first electric vehicle manufacturing facility at King Abdullah Economic City.",
    client: "Jeddah",
    tags: ["Industrial", "MEP"],
    status: "Ongoing",
    category: "Industrial",
    gradient: "from-[#059669] to-[#10b981]",
    categoryColor: "text-white",
  },
  {
    title: "Delta Marriott Hotel",
    description: "Premium hotel development supporting Saudi Arabia's tourism sector growth.",
    client: "Ash Shati, Jeddah",
    tags: ["Hospitality", "Fit-out"],
    status: "Ongoing",
    category: "Hospitality",
    gradient: "from-[#1a365d] to-[#2d4a7c]",
    categoryColor: "text-[#d4a853]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contributing to Saudi Arabia&apos;s most ambitious developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div
                  className={`absolute top-4 right-4 ${
                    project.status === "Ongoing"
                      ? "bg-[#d4a853] text-[#1a365d]"
                      : "bg-[#059669] text-white"
                  } text-xs px-3 py-1 rounded-full font-medium`}
                >
                  {project.status}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`text-sm font-semibold ${project.categoryColor}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#1a365d]/10 text-[#1a365d] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  {project.status === "Ongoing" ? "Location" : "Client"}: {project.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
