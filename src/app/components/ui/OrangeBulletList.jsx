/**
 * Bullet list with orange dots — editorial style.
 *
 * @param {string[]} items – Array of bullet texts
 */
const OrangeBulletList = ({ items }) => {
  return (
    <ul className="space-y-4 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-[#F38A5D] mt-2.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default OrangeBulletList;
