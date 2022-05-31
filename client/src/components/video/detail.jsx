import { Eye, HourglassSimple } from "phosphor-react";

const Detail = ({ views, duration }) => {
  return (
    <div className="abcentered w-[90%] h-[80%] rounded-lg flex flex-col justify-end">
      <div className="flex justify-between gap-2 p-2 bg-white border rounded-md">
        <div className="flex items-center gap-3">
          <p className="font-bold !m-0 text-sm">{views}</p>
          <Eye size={18} />
        </div>
        <div className="flex items-center gap-3">
          <p className="font-bold !m-0 text-sm">{duration}</p>
          <HourglassSimple size={18} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
