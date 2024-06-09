import { FC } from "react";
import "./styles.css";

export const Spinner: FC = () => {
  return (
    <div className="spinner-container" data-testid="spinner">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
    </div>
  );
};
