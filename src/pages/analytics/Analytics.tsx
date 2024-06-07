import { FC } from "react";
import "./styles.css";
import { useAppSelector } from "../../hooks.ts";
import { Spinner } from "../../components/Spinner.tsx";

export const Analytics: FC = () => {
  const { cards } = useAppSelector((s) => s.card.value);

  return (
    <section className="container">
      {cards ? (
        <table>
          <thead>
            <tr>
              <th> S/N</th>
              <th>Card Id</th>
              <th>Card Title</th>
              <th>Number of Clicks</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card.id}>
                <td data-label="S/N">{index + 1}</td>
                <td data-label="Card Id">{card.id}</td>
                <td>{card.title}</td>
                <td data-label="Number of Clicks">
                  {card.clickCount ? card.clickCount : 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </section>
  );
};
