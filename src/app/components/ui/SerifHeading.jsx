/**
 * Serif h5 heading with an orange accent word.
 *
 * Usage:
 *   <SerifHeading before="Hvordan" accent="mærkes" after="angst?" />
 *   → "Hvordan <em class='orange'>mærkes</em> angst?"
 *
 * @param {string}  [before]  – Text before the accent word
 * @param {string}  accent    – Italic orange word
 * @param {string}  [after]   – Text after the accent word
 * @param {string}  [className] – Extra classes
 */
const SerifHeading = ({ before = "", accent, after = "", className = "" }) => {
  return (
    <h5
      className={`font-[family-name:var(--font-source-serif)] text-[#367067] font-semibold text-xl mt-10 mb-3 ${className}`}
    >
      {before && `${before} `}
      <span className="italic text-[#F38A5D]">{accent}</span>
      {after && ` ${after}`}
    </h5>
  );
};

export default SerifHeading;
