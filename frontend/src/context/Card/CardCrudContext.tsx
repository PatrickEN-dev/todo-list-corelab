"use client";

import { createContext, useEffect, useState } from "react";
import { TCard, TCardCrudContext, TUpdateCard, TCardRequest } from "./interfaces";
import { TChildrenProps } from "@/@types/global";
import { API } from "@/services/API";

export const CardCrudContext = createContext<TCardCrudContext>({} as TCardCrudContext);

export const CardCrudProvider = ({ children }: TChildrenProps) => {
  const [cards, setCards] = useState<TCard[]>([]);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [colors, setColors] = useState<string>("");
  const [searchCards, setSearchCards] = useState("");
  const [filterCards, setFilterCards] = useState<TCard[]>([]);

  const getCardsRequest = async () => {
    try {
      const response = await API.get("/cards");
      setCards(response.data);
    } catch (error) {
      console.error("Erro ao buscar os cards:", error);
    }
  };

  useEffect(() => {
    getCardsRequest();
  }, []);

  const addCard = async (data: TCardRequest) => {
    try {
      if (!data.title && !data.note) {
        console.error("Erro: O card deve ter pelo menos um título ou uma descrição.");
        return;
      }

      data.isFavorite = typeof data.isFavorite === "boolean" ? data.isFavorite : false;

      const response = await API.post(`/cards`, data);
      const cardInfo: TCard[] = response.data;
      setCards(cardInfo);
    } catch (error) {
      console.error("Erro ao criar o card:", error);
    }
  };

  const updateCard = async (id: string, data: TUpdateCard) => {
    try {
      await API.patch(`/cards/${id}`, data);

      const updatedCards: TCard[] = cards.map((card) =>
        card.id === id ? { ...card, ...data } : card
      );

      setCards(updatedCards);
    } catch (error) {
      console.error("Erro ao atualizar o card:", error);
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await API.delete(`/cards/${id}`);

      const deletedContact = cards.filter((card) => card.id !== id);
      setCards(deletedContact);
    } catch (error) {
      console.error("Erro ao excluir o card:", error);
    }
  };

  const filterCardSearchBar = () => {
    const recieveCards = [...cards];
    console.log(recieveCards);
    const filterNameCards = recieveCards.filter((element) =>
      element.title.toLowerCase().includes(searchCards.toLowerCase())
    );

    const filterCategoryCards = recieveCards.filter((element) =>
      element.note.toLowerCase().includes(searchCards.toLowerCase())
    );

    const combinedFilter = [...filterNameCards, ...filterCategoryCards];

    if (combinedFilter.length > 0) {
      setFilterCards(combinedFilter);
    } else {
      setFilterCards([]);
    }
  };

  return (
    <CardCrudContext.Provider
      value={{
        cards,
        setCards,
        addCard,
        note,
        setNote,
        title,
        setTitle,
        colors,
        setColors,
        deleteCard,
        updateCard,
        searchCards,
        setSearchCards,
        filterCards,
        setFilterCards,
        filterCardSearchBar,
      }}
    >
      {children}
    </CardCrudContext.Provider>
  );
};
