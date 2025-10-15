import GreenBox from "../ui/GreenBox";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const CategorySection = ({ title, description, tags, index = 0 }) => {
  return (
    <div className="p-6">
      <Accordion.Root type="single" collapsible className="w-full">
        <Accordion.Item value={`item-${index}`} className="border-b border-black">
          <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left group">
            <h3 className="transition-colors duration-300">{title}</h3>
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
            <div className="pb-4">
              <div className="mb-6">
                <p>{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <GreenBox key={index} text={tag} />
                ))}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
};

export default CategorySection;