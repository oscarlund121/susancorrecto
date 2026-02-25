import BackToHelp from "../ui/BackToHelp";

/**
 * Editorial header for help pages.
 *
 * @param {string}  title       – Plain text before the accent word
 * @param {string}  accentWord  – Italic orange word rendered after a <br>
 * @param {string}  text        – Paragraph shown with a sage border-l
 */
const HelpPageHeader = ({ title, accentWord, text }) => {
  return (
    <div className="relative md:py-16 py-8 bg-[#367067] text-white overflow-hidden">
      {/* Atmosfære — blid lyskilde */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#F38A5D]/5 to-transparent pointer-events-none" />

      <div className="relative content-max">
        <div className="md:px-[20px] lg:px-[60px] pt-0">
          {/* Breadcrumb */}
          <div className="">
            <BackToHelp />
          </div>

          {/* Overskrift — editorial */}
          <h2 className="mb-6 max-w-7xl">
            {title} 
            <span className="italic text-[#F38A5D]">    {accentWord}</span>
          </h2>

          {/* Brødtekst med sage-grøn læsestreg */}
          <p className="w-full md:w-2xl border-l-2 border-[#367067]/30 ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpPageHeader;
