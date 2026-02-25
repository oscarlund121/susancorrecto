import GreenBox from "../ui/GreenBox";

const Help = ({ title, tags }) => {
  return (
    <div className="mt-16">
      <h4 className="mb-2">{title}</h4>
      <div className="w-10 h-[3px] bg-[#F38A5D] rounded-full mb-8"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {tags.map((tag, index) => (
          <GreenBox key={index} text={tag} variant="soft" />
        ))}
      </div>
    </div>
  );
};

export default Help;
