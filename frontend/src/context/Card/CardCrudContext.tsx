"use client";

import { createContext, useState } from "react";
import { TCard, TCardCrudContext } from "./interfaces";
import { TChildrenProps } from "@/@types/global";

export const CardCrudContext = createContext<TCardCrudContext>({} as TCardCrudContext);

export const UsercontactsProvider = ({ children }: TChildrenProps) => {
  const [cards, setCards] = useState<TCard[]>([]);
  const [notes, setNotes] = useState("");
  const [title, setTitle] = useState("");
  const [colors, setColors] = useState<Array<[]>>([]);

  const addCard = (card: TCard) => setCards([...cards, card]);

  return (
    <CardCrudContext.Provider
      value={{ cards, setCards, addCard, notes, setNotes, title, setTitle, colors, setColors }}
    >
      {children}
    </CardCrudContext.Provider>
  );
};
