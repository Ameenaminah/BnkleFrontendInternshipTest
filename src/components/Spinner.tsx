import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

export const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <ThreeDots
        visible={true}
        height="200"
        width="200"
        color="var(--bg-color)"
        radius="30"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
