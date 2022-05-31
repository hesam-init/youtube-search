import { Button, Image, Skeleton } from "@mantine/core";
import persianDetect from "../utils/persianDetect";

const VideoBox = ({ data, thumbnail }) => {
  return (
    <div className="flex flex-col justify-between p-3 bg-white rounded-lg">
      {/* show image and skeleton */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Skeleton height={150} />
          <Image
            className="absolute top-0 z-50 w-full !rounded-lg overflow-hidden"
            alt={data.title}
            src={thumbnail}
            height={150}
          />
        </div>
        {/* show title */}
        <a
          style={{
            direction: persianDetect(data.title) ? "rtl" : "ltr",
          }}
          className="text-blue-600"
          href={data.url}
        >
          {data.title}
        </a>
      </div>
      {/* download button */}
      <Button color="blue" variant="outline" className="mt-5">
        Download
      </Button>
    </div>
  );
};

export default VideoBox;
