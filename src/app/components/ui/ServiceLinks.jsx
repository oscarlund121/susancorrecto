import Link from "next/link";

const services = [
  { title: "Eksamens- & præstationsangst", href: "/help/eksamensangst" },
  { title: "Angst & følelser", href: "/help/angst-og-folelser" },
  { title: "Depression & sorg", href: "/help/depression-og-sorg" },
  { title: "Relationer & familieliv", href: "/help/familie-par" },
];

const ServiceLinks = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start">
      {services.map((service) => (
        <Link key={service.href} href={service.href} className="group">
          <h5 className="text-[#367067] group-hover:text-white group-hover:bg-[#367067] group-hover:underline transition-all py-2 px-5 border-[#367067] border-2 rounded-full">
            {service.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default ServiceLinks;
