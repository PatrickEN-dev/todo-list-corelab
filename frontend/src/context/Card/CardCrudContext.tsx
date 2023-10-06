"use client";

import { createContext, useEffect, useState } from "react";
import { TCard, TCardCrudContext, TUpdateCard, TCardRequest } from "./interfaces";
import { TChildrenProps } from "@/@types/global";
import { API } from "@/services/API";
import { useSearchParams } from "next/navigation";

export const CardCrudContext = createContext<TCardCrudContext>({} as TCardCrudContext);

export const CardCrudProvider = ({ children }: TChildrenProps) => {
  const [cards, setCards] = useState<TCard[]>([]);
  const [searchCards, setSearchCards] = useState("");
  const [filterCards, setFilterCards] = useState<TCard[]>([]);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    const getCardsRequest = async () => {
      try {
        if (search) {
          const response = await API.get(`/cards/search?query=${search}`);

          setCards(response.data);
          return response.data;
        } else {
          const response = await API.get("/cards");
          setCards(response.data);
          return response.data;
        }
      } catch (error) {
        console.error("Erro ao buscar resultados da pesquisa:", error);
        throw error;
      }
    };
    getCardsRequest();
  }, [search]);

  const addCard = async (formData: TCardRequest) => {
    try {
      if (!formData.title && !formData.note) {
        console.error("Erro: O card deve ter pelo menos um título ou uma descrição.");
        return;
      }

      formData.isFavorite = typeof formData.isFavorite === "boolean" ? formData.isFavorite : false;

      const { data } = await API.post<TCard>(`/cards`, formData);

      setCards((cards) => [...cards, data]);
    } catch (error) {
      console.error("Erro ao criar o card:", error);
    }
  };

  const updateCard = async (id: string, data: TUpdateCard) => {
    try {
      await API.patch(`/cards/${id}`, data);

      setCards((cards) => cards.map((card) => (card.id === id ? { ...card, ...data } : card)));
    } catch (error) {
      console.error("Erro ao atualizar o card:", error);
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await API.delete(`/cards/${id}`);

      setCards((cards) => cards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Erro ao excluir o card:", error);
    }
  };

  const searchCardsByQuery = async (searchQuery: string) => {
    try {
      const response = await API.get(`/cards/search?query=${searchQuery}`);
      setFilterCards(response.data);
    } catch (error) {
      console.error("Erro ao buscar os cards por consulta:", error);
    }
  };

  return (
    <CardCrudContext.Provider
      value={{
        cards,
        setCards,
        addCard,
        deleteCard,
        updateCard,
        searchCards,
        setSearchCards,
        filterCards,
        setFilterCards,
        searchCardsByQuery,
      }}
    >
      {children}
    </CardCrudContext.Provider>
  );
};
