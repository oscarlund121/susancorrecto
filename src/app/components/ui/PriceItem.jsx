const PriceItem = ({ title, subtitle, price }) => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-black/10 transition-colors duration-200 hover:bg-[#367067]/[0.03] px-2 -mx-2 rounded-lg">
      <div>
        <h5 className="font-medium text-black">{title}</h5>
        {subtitle && (
          <p className="text-sm text-black/50 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="bg-[#367067] text-white px-5 py-2 rounded-full text-sm font-medium">
        {price},-
      </div>
    </div>
  );
};

export default PriceItem;
