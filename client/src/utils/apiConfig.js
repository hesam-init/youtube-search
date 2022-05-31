// api request:
const Api = async (search = "") => {
  const res = await fetch(`${process.env.REACT_APP_API}?name=${search}`);
  let data = await res.json();
  return data;
};

export default Api;
