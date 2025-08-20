import GreenBox from "../ui/GreenBox";
import SeeMoreButton from "../ui/SeeMoreButton";

const Help = ({ title, tags }) => {
  return (
    
    <div className="rounded-lg p-6 md:w-lg w-md h-[300px]">
      <h3 className="text-xl font-medium mb-4  border-b-2 border-[#367067] pb-2">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4 mb-6">
        {tags.map((tag, index) => (
          <GreenBox key={index} text={tag} />
        ))}
      </div>

      <div className="flex justify-end">
        <SeeMoreButton variant="light" />
      </div>
    </div>
  );
};

export default Help;
