import { Link } from "react-router-dom";
import "./styles.css";
import { FC } from "react";
import { NotFoundImage } from "../assets";

export const CardNotFound: FC = () => {
  return (
    <div className="error-container" data-testid="CardNotFound">
      <div className="not-found">
        <img src={NotFoundImage} className="notFound" alt="Not Found Image" />
      </div>
      <h1 className="title">Card does not exist. Please go back</h1>
      <Link to={"../../cards"} className="button">
        Back to Cards
      </Link>
    </div>
  );
};
