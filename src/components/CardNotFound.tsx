import { Link } from "react-router-dom";
import "./styles.css";
import { FC } from "react";

export const CardNotFound: FC = () => {
  return (
    <section className="error-container" data-testid="CardNotFound">
      <h1 className="title">Card does not exist. Please go back</h1>
      <div className="button-container">
        <Link to={"../../cards"} className="button">
          Back to Cards
        </Link>
      </div>
    </section>
  );
};
