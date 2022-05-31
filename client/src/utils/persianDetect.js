import persianRex from "persian-rex";

const persianDetect = (str) => {
  if (persianRex.text.test(str)) {
    console.log("persian");
    return true;
  } else {
    console.log("not persian");
    return false;
  }
};

export default persianDetect;
