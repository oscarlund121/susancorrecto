"use client";
import Link from "next/link";
import Button from "../ui/Button";

const HeaderSection = ({
  title,
  text,
  buttonText = "Book en samtale",
  buttonHref = "/booking",
  variant = "primary",
  borderColor = "black", // Ny prop for border farve
}) => {
  const borderClass = borderColor === "white" ? "border-white" : "border-black";

  return (
    <div className={` ${borderClass} pb-16`}>
      <div className="content-max">
        <div className="flex justify-between md:flex-row flex-col items-end">
          <div className=" space-y-8">
            <div className="w-full ">
              <h2>{title}</h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mt-4 md:mt-10 gap-4">
              <p className=" w-full md:w-lg">{text}</p>

            </div>
          </div>
              {variant !== false && (
                <div className=" items-end flex-shrink-0 mt-6 sm:mt-2">
                  <Link href={buttonHref}>
                    <Button variant={variant}>{buttonText}</Button>
                  </Link>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
