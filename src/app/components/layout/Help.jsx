import GreenBox from "../ui/GreenBox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Help = ({ title, tags, index = 0, tagVariant = "default", featured = false, iconVariant }) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={title} className="w-full">
          <div className="w-full p-2 md:p-4 cursor-pointer opacity-0 animate-fade-in-up"
               style={{ animationDelay: `${index * 150}ms` }}>
            <AccordionTrigger className={featured ? "bg-[#F38A5D] data-[state=open]:bg-white" : ""} iconVariant={iconVariant}>
              <span className={featured 
                ? "text-white group-data-[state=open]:text-black group-data-[state=open]:font-semibold" 
                : "text-[#367067] group-data-[state=open]:text-black group-data-[state=open]:font-semibold"
              }>{title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap justify-start gap-x-3 gap-y-6 pt-4 md:pt-8">
                {tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${tagIndex * 80}ms`, animationFillMode: "forwards" }}
                  >
                    <GreenBox text={tag} variant={tagVariant} />
                  </span>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Help;
