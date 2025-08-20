"use client";

import Button from "../ui/Button";

const Filler = ({title}) => {
  return (
    <div className="bg-[#DBE1F8] py-32">
      <div className=" flex flex-col items-center justify-center gap-12">
        <h2 className="text-center text-max">
          {title}
        </h2>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Filler;
