const PriceItem = ({ title, subtitle, price }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-black/20">
      <div>
        <h5 className="font-medium text-black">{title}</h5>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="bg-[#367067] text-white px-4 py-2 rounded-full font-medium">
        {price},-
      </div>
    </div>
  );
};

export default PriceItem;
