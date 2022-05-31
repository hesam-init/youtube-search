import Api from "../utils/apiConfig";
import { Input } from "@mantine/core";
import { useEffect, useState } from "react";
import VideoBox from "../components/videoBox";
import Loading from "../components/loading";
import Error from "../components/error";

const App = () => {
  // states:
  const [LoaderStatus, setLoader] = useState(false);
  const [ErrorStatus, setError] = useState(false);
  const [Search, setSearch] = useState("");
  const [Data, setData] = useState([]);

  // get data:
  useEffect(() => {
    setLoader(true);
    Api(Search === "" ? "react js" : Search)
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoader(false));
  }, [Search]);

  // render:
  if (ErrorStatus) {
    return <Error />;
  } else {
    return (
      <div className="w-full p-5">
        {/* search input */}
        <Input
          style={{
            direction: "rtl !important",
          }}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          size="lg"
          radius="md"
        />
        {/* show content */}
        {LoaderStatus ? (
          <Loading />
        ) : (
          <div className="grid w-full grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Data?.map((video) => {
              return (
                <VideoBox
                  data={video}
                  key={video.id.videoId}
                  thumbnail={video.snippet.thumbnails.url}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default App;
