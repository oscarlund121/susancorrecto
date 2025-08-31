import PriceItem from "../ui/PriceItem";

const PriceSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <div className="mb-6 border-b-2 border-black pb-2">
        <h3>{title}</h3>
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
