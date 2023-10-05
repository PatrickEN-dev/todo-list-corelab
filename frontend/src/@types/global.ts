import { TCard } from "@/context/Card/interfaces";
import { ReactNode } from "react";

export type TChildrenProps = {
  children: ReactNode;
};

export type TCardProps = {
  toDo: TCard;
};

export interface IEditFormValues {
  value: string;
}
