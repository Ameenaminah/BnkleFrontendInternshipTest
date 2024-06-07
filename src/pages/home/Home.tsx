import { useInjectedService } from "../../hooks.ts";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card.tsx";

export const Home = () => {
  const { cardService } = useInjectedService();

  const { isLoading, data } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      return await cardService.getCards();
    },
  });

  return (
    <section className="home-container">
      {!isLoading && data?.map((item) => <Card item={item} />)}
    </section>
  );
};
