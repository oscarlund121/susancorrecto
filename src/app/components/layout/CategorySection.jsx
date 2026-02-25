import GreenBox from "../ui/GreenBox";

const CategorySection = ({ title, description, tags, index = 0, featured = false }) => {
  return (
    <div
      className={`group rounded-3xl p-8 md:p-12
        shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] 
        hover:shadow-[0_4px_16px_rgba(54,112,103,0.12)] hover:scale-[1.01] 
        transition-all duration-300 ease-out h-full flex flex-col
        ${featured ? "bg-white" : "bg-[#DBE1F8]/30"}`}
    >
      <div className="mb-2">
        <h3 className="mb-3 group-hover:text-black transition-colors duration-300">
          {title}
        </h3>
        <div className="w-10 h-[3px] bg-[#F38A5D] rounded-full"></div>
      </div>

      <div className="mt-6 mb-8 flex-grow">
        <p className="leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {tags.map((tag, tagIndex) => (
          <GreenBox key={tagIndex} text={tag} variant="soft" />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;