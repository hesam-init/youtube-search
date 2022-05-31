// api configs:
const KEY = "AIzaSyCXN4d3EsBM4_La7hJ4vkXEBlW0a_ND8dE";

// api request:
const Api = async (search = "", result = 25) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${KEY}&q=${search}&maxResults=${result}`
  );
  let data = await res.json();
  return data;
};

export default Api;
