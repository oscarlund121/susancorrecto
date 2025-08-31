import GreenBox from "../ui/GreenBox";
import SeeMoreButton from "../ui/SeeMoreButton";

const Help = ({ title, tags }) => {
  return (
    <div className="xl:w-[600px] lg:w-[500px] px-6  md:w-[350px] w-full h-[300px] mb-16">
      <h3 className="mb-6 border-b border-black">{title}</h3>
      <div className="flex flex-col h-[250px]">
        <div className="flex flex-wrap gap-4 mb-6 ">
          {tags.map((tag, index) => (
            <GreenBox key={index} text={tag} />
          ))}
        </div>

        <div className="flex justify-end">
          <SeeMoreButton variant="light" />
        </div>
      </div>
    </div>
  );
};

export default Help;
