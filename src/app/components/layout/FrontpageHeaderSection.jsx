"use client";
import Link from "next/link";
import Button from "../ui/Button";

const HeaderSection = ({
  title,
  text,
  buttonText = "Book en samtale",
  buttonHref = "/booking",
  variant = "primary",
}) => {
  return (
    <div>
      <div className="content-max">
        <div className="flex justify-between items-end">
          <div className="">
            <h2>{title}</h2>
            <p className="w-xl pt-10">{text}</p>
          </div>

       {variant !== false && (
            <div className="flex items-end mt-6 sm:mt-2">
              <Link href={buttonHref}>
                <Button variant={variant}>
                  {buttonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
