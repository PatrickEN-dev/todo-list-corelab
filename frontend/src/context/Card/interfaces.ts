import { Dispatch, SetStateAction } from "react";

export interface TCard {
  id: string;
  title: string;
  note: string;
  isFavorite: boolean;
  color: string;
}
// no meu Modal, a coluna está como color

export interface TUpdateCard extends Partial<TCard> {}

export interface TCardRequest extends Omit<TCard, "id"> {}

export interface TCardCrudContext {
  cards: TCard[];
  setCards: Dispatch<SetStateAction<TCard[]>>;

  addCard: (card: TCardRequest) => void;
  updateCard: (id: string, updatedCard: TUpdateCard) => void;
  deleteCard: (id: string) => void;

  searchCards: string;
  setSearchCards: React.Dispatch<React.SetStateAction<string>>;
  filterCards: TCard[];
  setFilterCards: React.Dispatch<React.SetStateAction<TCard[]>>;
  filterCardSearchBar: () => void;
  searchCardsByQuery: (searchQuery: string) => Promise<void>;
}
