import { useFetchDetailData, useInjectedService } from "../../hooks.ts";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner.tsx";
import { CardNotFound } from "../../components/CardNotFound.tsx";
import { useCallback } from "react";

export const CardDetail = () => {
  const { id } = useParams();
  const { cardService } = useInjectedService();

  const getCardQuery = useCallback(async () => {
    return await cardService.getCard(Number(id));
  }, [cardService, id]);

  const { isFetching, data: card } = useFetchDetailData(["card"], getCardQuery);

  const cardDoesNotExist = !isFetching && !card;

  return (
    <div className="modal-container">
      {!isFetching && card?.thumbnail.large ? (
        <>
          <Link to={".."} className="closeX">
            X
          </Link>
          <img src={card.thumbnail.large} className="img" alt="" />
          <div className="modal-content">
            <h1>{card.title}</h1>
            <p className="content">{card.content}</p>
            <div className="author-container">
              {card.author.avatar && (
                <div className="avatar">
                  <img src={card.author.avatar} alt="avatar" />
                </div>
              )}
              <div className="author-container">
                <p>{card.author.name}</p>
                <p>-</p>
                <p>{card.author.role}</p>
              </div>
            </div>
          </div>
        </>
      ) : cardDoesNotExist ? (
        <CardNotFound />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
