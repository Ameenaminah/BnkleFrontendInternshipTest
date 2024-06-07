import { useInjectedService } from "../../hooks.ts";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner.tsx";
import { CardNotFound } from "../../components/CardNotFound.tsx";

export const CardDetail = () => {
  const { id } = useParams();
  const { cardService } = useInjectedService();

  const { isFetching, data: card } = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      return await cardService.getCard(Number(id));
    },
  });
  const cardDoesNotExist = !isFetching && !card;

  return (
    <>
      {!isFetching && card?.thumbnail.large ? (
        <div className="modal-container">
          <Link to={".."} className="closeX">
            X
          </Link>
          <img src={card.thumbnail.large} className="img" alt="" />
          <div className="modal-content">
            <h1>{card.title}</h1>
            <p className="content">{card.content}</p>
            <div className="author-container">
              <div className="avatar">
                <img src={card.author.avatar} alt="avatar" />
              </div>
              <div className="author-container">
                <p>{card.author.name}</p>
                <p>-</p>
                <p>{card.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      ) : cardDoesNotExist ? (
        <CardNotFound />
      ) : (
        <Spinner />
      )}
    </>
  );
};
