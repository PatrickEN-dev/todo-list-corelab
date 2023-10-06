import CardList from "@/components/Cards/CardList";
import { useCard } from "@/hooks/useCard.hook";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [searchResults, setSearchResults] = useState([]);

  const { getCardsRequest } = useCard();

  useEffect(() => {
    getCardsRequest();
  }, [search]);

  return (
    <>
      <div>
        <h1>Rota search</h1>
        <p>Resultados de busca para: {search}</p>
      </div>

      <CardList />
    </>
  );
}
