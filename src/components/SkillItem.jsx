import React from "react";

const SkillItem = ({ skillName }) => {
  return (
    <>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
        {skillName}
      </div>
    </>
  );
};

export default SkillItem;
