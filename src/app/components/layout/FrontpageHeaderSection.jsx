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
          <div className=" w-full text-max ">
            <h2>{title}</h2>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mt-6 md:mt-10">
              <p className=" w-full md:w-xl">{text}</p>

              {variant !== false && (
                <div className="flex-shrink-0 items-end mt-6 sm:mt-2">
                  <Link href={buttonHref}>
                    <Button variant={variant}>{buttonText}</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
