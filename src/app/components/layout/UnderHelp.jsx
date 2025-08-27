import GreenBox from "../ui/GreenBox";

const Help = ({ title, tags }) => {
  return (
    <div className="mt-16">
      <h3 className="mb-6">{title}</h3>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {tags.map((tag, index) => (
          <GreenBox key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Help;
