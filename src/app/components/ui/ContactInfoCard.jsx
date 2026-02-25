import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const cards = [
  {
    href: 'mailto:kontakt@psykoterapisusan.dk',
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'kontakt@psykoterapisusan.dk',
  },
  {
    href: 'tel:+4525392539',
    icon: FaPhone,
    label: 'Telefon',
    value: '+45 25 39 25 39',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Adresse',
    value: 'Aarhus C, 8000',
  },
];

function Card({ href, icon: Icon, label, value }) {
  const interactive = !!href;
  const Tag = interactive ? 'a' : 'div';

  return (
    <Tag
      {...(interactive && { href })}
      className={`group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm ${interactive ? 'hover:shadow-md' : ''} transition-all`}
    >
      <div className={`w-11 h-11 rounded-full bg-[#367067]/10 flex items-center justify-center shrink-0 ${interactive ? 'group-hover:bg-[#367067]/20' : ''} transition-colors`}>
        <Icon className="w-4 h-4 text-[#367067]" />
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0">{label}</p>
        <p className={`text-sm font-medium text-black mb-0 ${interactive ? 'group-hover:text-[#367067]' : ''} transition-colors`}>
          {value}
        </p>
      </div>
    </Tag>
  );
}

export default function ContactInfoCards() {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
      {cards.map((card) => (
        <Card key={card.label} {...card} />
      ))}
    </div>
  );
}
