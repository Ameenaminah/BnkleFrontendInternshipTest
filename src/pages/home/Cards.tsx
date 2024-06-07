import { useInjectedService } from "../../hooks.ts/index.ts";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card.tsx";
import { Outlet } from "react-router-dom";
import { Spinner } from "../../components/Spinner.tsx";

export const Cards = () => {
  const { cardService } = useInjectedService();

  const { isLoading, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      return await cardService.getCards();
    },
  });

  return (
    <>
      <section className="home-container">
        {!isLoading && data ? (
          data.map((item) => <Card item={item} />)
        ) : (
          <Spinner />
        )}
      </section>
      <Outlet />
    </>
  );
};
