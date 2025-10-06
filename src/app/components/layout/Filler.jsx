"use client";

import Button from "../ui/Button";
import Link from "next/link";

const Filler = ({title}) => {
  return (
    <div className="bg-[#DBE1F8] py-32">
      <div className="flex flex-col items-center justify-center gap-12">
        <h2 className="text-center text-max">
          {title}
        </h2>
        <div className="flex justify-center">
          <Link href="/kontakt">
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filler;
