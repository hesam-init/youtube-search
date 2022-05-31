// node modules:
import * as yt from "youtube-search-without-api-key";

// youtube search results:
const searchApi = async (input) => {
  const videos = await yt.search(input);
  return videos;
};

export default searchApi;
