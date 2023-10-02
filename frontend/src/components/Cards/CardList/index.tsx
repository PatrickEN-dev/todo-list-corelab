import Card from "../Card";
import { useCard } from "@/hooks/useCard.hook";
import { TCard } from "@/context/Card/interfaces";

export default function CardList() {
  const { cards } = useCard();
  const hasCards = cards && cards.length > 0;

  return (
    <>
      {hasCards && (
        <section>
          <h4>Favoritos</h4>
          <ul>
            {cards.map((card: TCard) => (
              <li key={card.id}>
                <Card
                  title={card.title}
                  note={card.note}
                  id={card.id}
                  isFavorite={true}
                  colors={card.colors}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasCards && (
        <section>
          <h4>Outros</h4>
          <ul>
            {cards.map((card: TCard) => (
              <li key={card.id}>
                <Card
                  title={card.title}
                  note={card.note}
                  id={card.id}
                  isFavorite={false}
                  colors={card.colors}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!hasCards && <p>Você ainda não criou anotações.</p>}
    </>
  );
}
