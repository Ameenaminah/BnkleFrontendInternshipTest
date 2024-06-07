import { FC } from "react";
import { CardResponse } from "../../models.ts";
import "./home.css";

interface Prop {
  item: CardResponse;
}

export const Card: FC<Prop> = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.thumbnail.small} alt="" />
      <div className="content-container">
        <h1 className="title">{item.title}</h1>
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
    </div>
  );
};
