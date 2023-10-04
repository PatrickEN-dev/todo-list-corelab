"use client";
import Image from "next/image";
import { useState } from "react";
import FavoriteIconEmpty from "@/assets/star-empty.svg";
import StarActivated from "@/assets/star-color.svg";
import { TFavoriteButtonProps } from "./interfaces";

export const FavoriteButton = ({
  initialValue,
  onFavoriteChange,
  ...rest
}: TFavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialValue);

  const toggleFavorite = async () => {
    const newIsFavorite = !isFavorite;
    await onFavoriteChange(newIsFavorite);
    setIsFavorite(newIsFavorite);
  };

  return (
    <span onClick={toggleFavorite} {...rest}>
      <Image src={isFavorite ? StarActivated : FavoriteIconEmpty} alt="icon de favorite" />
    </span>
  );
};
