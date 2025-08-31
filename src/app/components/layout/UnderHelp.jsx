import GreenBox from "../ui/GreenBox";

const Help = ({ title, tags }) => {
  return (
    <div className="mt-16">
      <div className="border-b border-black mb-6">
      <h3 className="">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {tags.map((tag, index) => (
          <GreenBox key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Help;
