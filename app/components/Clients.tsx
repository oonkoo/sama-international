"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "NEOM",
    color: "#000000",
    category: "Mega Project",
    logo: "https://www.freelogovectors.net/wp-content/uploads/2021/05/neom-logo-freelogovectors.net_.png",
  },
  {
    name: "Saudi Aramco",
    color: "#00843D",
    category: "Energy",
    logo: "https://esc.uk.net/wp-content/uploads/2018/09/aramco-og-logo.png",
  },
  {
    name: "Red Sea Global",
    color: "#0891B2",
    category: "Tourism",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Red_Sea_Global_Logo.svg/1280px-Red_Sea_Global_Logo.svg.png",
  },
  {
    name: "SABIC",
    color: "#0033A0",
    category: "Industrial",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2pKsr3h583zFxoHoR3yoXiZm3lK39j81Sg&s",
  },
  {
    name: "MA'ADEN",
    color: "#C8102E",
    category: "Mining",
    logo: "https://companieslogo.com/img/orig/1211.SR_BIG-cd45e7ce.png?t=1747107399",
  },
  {
    name: "Nesma & Partners",
    color: "#1E4D8C",
    category: "Construction",
    logo: "https://alturkiholding.com/media/jntajpnz/nesma.png",
  },
  {
    name: "Saudi Binladin Group",
    color: "#8B4513",
    category: "Construction",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/ca/Saudi_Binladin_Group_Logo.svg",
  },
  {
    name: "Tamimi Global",
    color: "#003366",
    category: "Construction",
    logo: "https://tamimiglobal.com/wp-content/uploads/2015/08/LOGO.png",
  },
  {
    name: "MOMRA",
    color: "#006847",
    category: "Government",
    logo: "https://globalabc.org/sites/default/files/members/Saudi%20Arabia%20Ministry%20of%20Municipal%20and%20Rural%20Affairs%20%26%20Housing.png",
  },
  {
    name: "Ministry of Culture",
    color: "#6B2D5B",
    category: "Government",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Saudi_Ministry_of_Culture_Logo.svg/250px-Saudi_Ministry_of_Culture_Logo.svg.png",
  },
  {
    name: "National Water Co.",
    color: "#0077BE",
    category: "Utilities",
    logo: "https://arabiancalibration.com/wp-content/uploads/2021/01/800px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B4%D8%B1%D9%83%D8%A9_%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A92-800x400.jpeg",
  },
  {
    name: "SINOPEC",
    color: "#E31837",
    category: "Energy",
    logo: "https://assets.spe.org/dims4/default/dcce692/2147483647/strip/true/crop/2047x443+0+0/resize/800x173!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.us-east-2.amazonaws.com%2F5d%2F49%2F5099425d44f8b3fce740f949d685%2Fsinopec-overseas-logo.jpg",
  },
  {
    name: "Al-Bawani",
    color: "#B8860B",
    category: "Construction",
    logo: "https://www.creatio.com/page/sites/landings/files/albawani/AL-Bawani-logo.png",
  },
  {
    name: "Royal Commission",
    color: "#1B4D3E",
    category: "Government",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/RCJY_Logo_New.svg/1280px-RCJY_Logo_New.svg.png",
  },
  {
    name: "Jabal Omar",
    color: "#7C3AED",
    category: "Development",
    logo: "https://argaamplus.s3.amazonaws.com/857890f4-1952-4c52-9438-fa36762987c0.png",
  },
];

const duplicatedClients = [...clients, ...clients];

function ClientCard({ client }: { client: typeof clients[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip - positioned outside the card */}
      <div
        className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium text-white rounded whitespace-nowrap z-20 transition-all duration-200 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ backgroundColor: client.color }}
      >
        {client.category}
      </div>

      {/* Card */}
      <div
        className={`w-[180px] h-[80px] bg-white rounded-xl border flex items-center justify-center px-4 transition-all duration-300 cursor-pointer ${
          hovered ? "border-gray-300 shadow-lg -translate-y-1" : "border-gray-100"
        }`}
      >
        {!imgError ? (
          <img
            src={client.logo}
            alt={client.name}
            className={`max-w-[120px] max-h-[40px] object-contain transition-all duration-300 ${
              hovered ? "grayscale-0 scale-105" : "grayscale opacity-60"
            }`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className="font-semibold text-sm text-center transition-colors duration-300"
            style={{ color: hovered ? client.color : "#6B7280" }}
          >
            {client.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Clients() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    let pos1 = 0;
    let pos2 = -row2.scrollWidth / 2;
    const speed = 0.4;

    const animate = () => {
      pos1 -= speed;
      pos2 += speed;

      if (Math.abs(pos1) >= row1.scrollWidth / 2) pos1 = 0;
      if (pos2 >= 0) pos2 = -row2.scrollWidth / 2;

      row1.style.transform = `translateX(${pos1}px)`;
      row2.style.transform = `translateX(${pos2}px)`;

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="clients" className="py-20 bg-[#fafbfc] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-[#d4a853] font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with Saudi Arabia&apos;s most prestigious government and private organizations
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4 pt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafbfc] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafbfc] to-transparent z-10" />

        <div ref={row1Ref} className="flex gap-4" style={{ width: "fit-content" }}>
          {duplicatedClients.map((client, i) => (
            <ClientCard key={`row1-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative pt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafbfc] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafbfc] to-transparent z-10" />

        <div ref={row2Ref} className="flex gap-4" style={{ width: "fit-content" }}>
          {[...duplicatedClients].reverse().map((client, i) => (
            <ClientCard key={`row2-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-center gap-12 sm:gap-20">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a365d]">15+</p>
            <p className="text-gray-500 text-sm">Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a365d]">6+</p>
            <p className="text-gray-500 text-sm">Industries</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#1a365d]">100%</p>
            <p className="text-gray-500 text-sm">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
