import {
  useAppSelector,
  useFetchData,
  useInjectedService,
} from "../../hooks.ts/index.ts";
import { Card } from "./Card.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { Spinner } from "../../components/Spinner.tsx";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCards } from "../../state/card/cardSlice.ts";
import { isArrayNullOrEmpty } from "../../components/helper/helper.ts";

export const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { cardService } = useInjectedService();
  const dispatch = useDispatch();
  const location = useLocation();

  const { cards } = useAppSelector((s) => s.card.value);

  const getCardsQuery = useCallback(async () => {
    return await cardService.getCards();
  }, [cardService]);

  const { isLoading, data } = useFetchData(["cards"], getCardsQuery);

  useEffect(() => {
    if (isArrayNullOrEmpty(cards) && data) {
      dispatch(setCards(data));
    }
  }, [dispatch, data, cards]);

  useEffect(() => {
    setIsModalOpen(location.pathname.includes("cards/"));
  }, [location.pathname]);

  return (
    <>
      <section
        className={`home-container ${isModalOpen ? "blurred" : ""}`}
        data-testid="cards"
      >
        {!isLoading && cards ? (
          cards.map((item) => <Card item={item} key={item.id} />)
        ) : (
          <Spinner />
        )}
      </section>
      <Outlet />
    </>
  );
};
