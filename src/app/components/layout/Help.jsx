import GreenBox from "../ui/GreenBox";
import SeeMoreButton from "../ui/SeeMoreButton";

const Help = ({ title, tags, index = 0 }) => {
  return (
    <div className="flex flex-col group">
      <div className="xl:w-[600px] lg:w-[500px] px-6 md:w-[350px] w-full xl:h-[350px] lg:h-[400px] md:h-[450px] mb-4 bg-white p-6 rounded-lg transition-all duration-200 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in-up "
           style={{ animationDelay: `${index * 150}ms` }}>
        <h3 className="mb-6 border-b border-black">{title}</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-6">
          {tags.map((tag, index) => (
            <GreenBox key={index} text={tag} />
          ))}
        </div>
      </div>
      <div className="flex justify-end mb-12">
        <SeeMoreButton variant="inverse" />
      </div>
    </div>
  );
};

export default Help;
