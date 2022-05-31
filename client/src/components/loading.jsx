import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="centered">
      <div className="p-3 bg-white rounded-lg ">
        <Loader color="dark" variant="dots" />
      </div>
    </div>
  );
};

export default Loading;
