"use client";

import Card from "../Card";
import { useCard } from "@/hooks/useCard.hook";
import { TCard } from "@/context/Card/interfaces";

export default function CardList() {
  const { cards } = useCard();
  const hasCards = cards && cards.length > 0;

  const favoriteCards = Array.isArray(cards) ? cards.filter((card) => card.isFavorite) : [];
  const otherCards = Array.isArray(cards) ? cards.filter((card) => !card.isFavorite) : [];

  return (
    <div className="flex flex-col w-full">
      {hasCards && (
        <section>
          <h4>Favoritos</h4>
          <ul className="md:flex md:flex-row mt-3 md:w-fit-content md:overflow-x-scroll md:scroll-smooth">
            {favoriteCards.map((card: TCard) => (
              <li key={card.id}>
                <Card toDo={card} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasCards && (
        <section>
          <h4>Outros</h4>
          <ul className="md:flex md:flex-row mt-3">
            {otherCards.map((card: TCard) => (
              <li key={card.id}>
                <Card toDo={card} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!hasCards && <p>Você ainda não criou anotações.</p>}
    </div>
  );
}
