import GreenBox from "../ui/GreenBox";

const CategorySection = ({ title, description, tags, index = 0 }) => {
  return (
    <div className="p-6">
      <div className="border-b border-black pb-4">
        <h3 className="mb-4">{title}</h3>
        <div className="mb-6">
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, tagIndex) => (
            <GreenBox key={tagIndex} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default CategorySection;