import { FC } from "react";
import { CardResponse } from "../../models.ts";
import "./home.css";
import { Link } from "react-router-dom";
import { useIncrementClickCount } from "../../hooks.ts/index.ts";

interface Prop {
  item: CardResponse;
}

export const Card: FC<Prop> = ({ item }) => {
  const { incrementClickCount } = useIncrementClickCount();

  const handleClickCount = () => {
    incrementClickCount(item);
  };

  return (
    <Link
      to={item.id.toString()}
      className="card-container"
      onClick={handleClickCount}
      key={item.id}
    >
      <img src={item.thumbnail.small} alt="" />
      <div className="content-container">
        <div className="author-container">
          <div className="circle blue" />
          <div className="circle yellow" />
        </div>
        <h1 className="card-title">{item.title}</h1>
        <p className="content">{item.content}</p>
        <footer>
          <div className="author-container">
            <p>{item.author.name}</p>
            <p>-</p>
            <p>{item.author.role}</p>
          </div>
          <p>{item.date}</p>
        </footer>
      </div>
    </Link>
  );
};
