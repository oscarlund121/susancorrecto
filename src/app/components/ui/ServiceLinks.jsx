import Link from "next/link";

const services = [
  { title: "Eksamens- og præstationsangst", href: "/ydelser/eksamensangst" },
  { title: "Angst og følelser", href: "/ydelser/angst-og-folelser" },
  { title: "Depression og sorg", href: "/ydelser/depression-og-sorg" },
  { title: "Relationer og familieliv", href: "/ydelser/familie-par" },
];

const ServiceLinks = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start">
      {services.map((service) => (
        <Link key={service.href} href={service.href} className="group">
          <h5 className="text-black group-hover:underline transition-all  py-2 px-5 bg-[#DBE1F8] border-[#367067] border-2 rounded-full">
            {service.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default ServiceLinks;
