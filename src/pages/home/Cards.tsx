import { useAppSelector, useInjectedService } from "../../hooks.ts/index.ts";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card.tsx";
import { Outlet } from "react-router-dom";
import { Spinner } from "../../components/Spinner.tsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCards } from "../../state/card/cardSlice.ts";

export const Cards = () => {
  const { cardService } = useInjectedService();
  const dispatch = useDispatch();
  const { cards } = useAppSelector((s) => s.card.value);

  const { isLoading, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      return await cardService.getCards();
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setCards(data));
    }
  }, [dispatch, data]);

  return (
    <>
      <section className="home-container">
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
