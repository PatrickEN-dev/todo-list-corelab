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
      }}
    >
      {children}
    </CardCrudContext.Provider>
  );
};
