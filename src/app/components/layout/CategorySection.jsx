import GreenBox from "../ui/GreenBox";

const CategorySection = ({ title, description, tags, index = 0 }) => {
  return (
    <div 
      className="bg-[#DBE1F8] p-6 rounded-lg transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in-up border border-gray-100 hover:border-[#367067]/20"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-4 border-b border-black pb-2">
        <h3 className="transition-colors duration-300">{title}</h3>
      </div>
      <div className=" border-b border-black mb-6 pb-4">
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <GreenBox key={index} text={tag} />
        ))}
      </div>
    </div>
  )
};

export default CategorySection;
