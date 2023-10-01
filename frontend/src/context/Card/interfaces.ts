import { Dispatch, SetStateAction } from "react";

export interface TCard {
  id: string;
  title: string;
  note: string;
  isFavorite: boolean;
  color: Array<[]>;
}

export interface TCardCrudContext {
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  colors: Array<[]>;
  setColors: Dispatch<SetStateAction<Array<[]>>>;
  addCard: (card: TCard) => void;
}
