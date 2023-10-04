import { Dispatch, SetStateAction } from "react";

export interface TCard {
  id: string;
  title: string;
  note: string;
  isFavorite: boolean;
  colors: string;
}
export interface TUpdateCard extends Partial<TCard> {}

export interface TCardRequest extends Omit<TCard, "id"> {}

export interface TCardCrudContext {
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  colors: string;
  setColors: Dispatch<SetStateAction<string>>;
  addCard: (card: TCardRequest) => void;
  updateCard: (id: string, updatedCard: TUpdateCard) => void;
  deleteCard: (id: string) => void;
}
