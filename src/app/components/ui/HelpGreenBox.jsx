import ListItem from "../ui/ListItem";
import Button from "../ui/Button";

/**
 * Sage-green card used inside help pages.
 *
 * @param {string}   title    – h4 heading inside the card
 * @param {string[]} items    – Array of bullet texts (rendered as ListItem)
 * @param {string}   [btnText]  – Button label (default: "Book en uforpligtende samtale")
 * @param {string}   [btnHref]  – Button link (default: "/kontakt")
 */
const HelpGreenBox = ({
  title,
  items,
  btnText = "Book en uforpligtende samtale",
  btnHref = "/kontakt",
}) => {
  return (
    <ul className="space-y-5 bg-[#367067] rounded-[32px] px-10 py-12">
      <li className="pb-2">
        <h4 className="text-white font-medium">{title}</h4>
        <div className="w-10 h-[2px] bg-[#F38A5D] rounded-full mt-3" />
      </li>
      {items.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
      <div className="flex justify-center pt-8">
        <Button variant="study" href={btnHref}>{btnText}</Button>
      </div>
    </ul>
  );
};

export default HelpGreenBox;
