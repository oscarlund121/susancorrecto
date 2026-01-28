import GreenBox from "../ui/GreenBox";
import SeeMoreButton from "../ui/SeeMoreButton";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Help = ({ title, tags, index = 0 }) => {
  return (
    <div className="flex flex-col">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value={title}>
          <div className="xl:w-[600px] lg:w-[500px] px-6 md:w-[350px] w-full mb-4 bg-white p-6 rounded-lg t cursor-pointer opacity-0 animate-fade-in-up"
               style={{ animationDelay: `${index * 150}ms` }}>
            <Accordion.Trigger className="flex justify-between items-center w-full text-left group border-b border-black pb-2 mb-6">
              <h3>{title}</h3>
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-black transition-transform duration-200 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <div className="flex flex-wrap gap-x-3 gap-y-6 pt-4">
                {tags.map((tag, tagIndex) => (
                  <GreenBox key={tagIndex} text={tag} />
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <Link href="/help">
                  <SeeMoreButton variant="inverse" />
                </Link>
              </div>
            </Accordion.Content>
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default Help;
