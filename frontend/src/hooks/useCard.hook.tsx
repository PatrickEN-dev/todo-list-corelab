"use client";

import { CardCrudContext } from "@/context/Card/CardCrudContext";
import { useContext } from "react";

export const useCard = () => useContext(CardCrudContext);
