const ServiceHeader = ({ icon: Icon, badge, title, text }) => {
  return (
    <div className="bg-[#FAFCFB] md:py-16 py-8">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#367067]/10 rounded-full px-4 py-1.5 mb-6">
            {Icon && <Icon className="w-5 h-5 text-[#367067]" />}
            <span className="text-sm font-medium text-[#367067] tracking-wide">{badge}</span>
          </div>

          {/* Overskrift */}
          <h2 className="mb-4">{title}</h2>

          {/* Brødtekst med varmt visuelt anker */}
          <p className="w-full md:w-2xl border-l-2 border-[#F38A5D]/30 pl-5 text-gray-600">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
