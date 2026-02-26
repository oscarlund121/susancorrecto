import PriceItem from "../ui/PriceItem";

const PriceSection = ({ title, items }) => {
  return (
    <div className="mb-14">
      <div className="mb-6 border-b-2 border-[#367067]/20 pb-3">
        <h4 className="text-[#367067]">{title}</h4>
      </div>
      <div>
        {items.map((item, index) => (
          <PriceItem 
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
