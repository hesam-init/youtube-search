import Api from "../utils/apiConfig";
import { Input } from "@mantine/core";
import { useEffect, useState } from "react";
import VideoBox from "../components/videoBox";

const App = () => {
  // states:
  const [Search, setSearch] = useState("");
  const [Data, setData] = useState({});

  // get data:
  useEffect(() => {
    Api(Search).then((data) => {
      setData(data);
      console.log(data);
    });
  }, [Search]);
  return (
    <div className="w-full p-5">
      <Input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <div className="grid w-full grid-cols-5 gap-5 mt-5">
        {Data?.items?.map((video) => {
          return (
            <VideoBox
              data={video}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
