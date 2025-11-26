import * as React from "react";

export default function Divider({ color }: { color: string }) {
  return (
    <div className="h-full flex flex-col justify-center items-center max-[700px]:rotate-45">
      <span
        className={`block w-[3px] aspect-square rotate-45`}
        style={{ backgroundColor: color }}
      ></span>

      <span
        className={`block w-[1px] h-full -my-1`}
        style={{ backgroundColor: color }}
      ></span>

      <span
        className={`block w-[3px] aspect-square rotate-45`}
        style={{ backgroundColor: color }}
      ></span>
    </div>
  );
}
