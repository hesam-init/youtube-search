import Detail from "./detail";
import { Image, Skeleton } from "@mantine/core";
import { FileArrowDown } from "phosphor-react";

const Box = ({ data, thumbnail }) => {
  return (
    <div className="flex flex-col justify-between p-3 bg-white rounded-lg shadow-xl">
      {/* show image and skeleton */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Skeleton height={150} />
          <Image
            className="absolute top-0 z-50 w-full !rounded-lg overflow-hidden border-2 border-blue-500"
            alt={data.title}
            src={thumbnail}
            height={150}
          />
          <Detail views={data.views} duration={data.duration_raw} />
        </div>
        {/* show title */}
        <a
          className="px-3 text-center text-black hover:opacity-70"
          rel={"noopener noreferrer"}
          target={"_blank"}
          href={data.url}
        >
          {data.title}
        </a>
      </div>
      {/* download button */}
      <button className="flex items-center justify-center gap-3 p-2 mt-5 transition-transform duration-300 bg-[#0984e3] rounded-lg hover:-translate-y-1 active:opacity-80 text-white">
        Download
        <FileArrowDown size={18} />
      </button>
    </div>
  );
};

export default Box;
