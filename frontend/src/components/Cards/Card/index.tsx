"use client";

import { useState } from "react";
import Image from "next/image";
import { useCard } from "@/hooks/useCard.hook";
import SelectColors from "@/components/SelectColors";
import EditColorIcon from "@/assets/change-color-icon.svg";
import { EditInput } from "@/components/editables/EditInput";
import { EditTextArea } from "@/components/editables/EditTextArea";
import { TCardProps } from "@/@types/global";
import { IColorOption } from "@/components/SelectColors/types";
import { FavoriteButton } from "@/components/editables/FavoriteButton";
import { colorOptions } from "@/components/SelectColors/data";

export default function Card({ toDo }: TCardProps) {
  const { updateCard, deleteCard } = useCard();

  const colors = colorOptions.find((color) => color.themeColor === toDo.colors);

  const [isOpenSelectColors, setIsOpenSelectColors] = useState(false);

  return (
    <div
      className={`h-[300px] p-4 bg-${colors?.themeColor} text-${colors?.textColor} rounded-lg shadow-lg m-2 relative`}
    >
      <header className="flex justify-between items-center">
        <EditInput
          initialValue={toDo.title}
          onFormSubmit={({ value }) => updateCard(toDo.id, { title: value })}
        />
        <div className="flex items-center">
          <FavoriteButton
            initialValue={toDo.isFavorite}
            onFavoriteChange={(isFavorite) => updateCard(toDo.id, { isFavorite })}
            className="cursor-pointer"
          />
          <button type="button" onClick={() => deleteCard(toDo.id)} className="text-red-600">
            X
          </button>
        </div>
      </header>
      <EditTextArea
        initialValue={toDo.note}
        onFormSubmit={({ value }) => updateCard(toDo.id, { note: value })}
      />
      <div className="border-t-2 mt-2 flex justify-between items-center absolute bottom-2 left-2 right-2">
        <div className="flex items-center space-x-2">
          <button type="button" onClick={() => setIsOpenSelectColors(!isOpenSelectColors)}>
            <Image src={EditColorIcon} alt="editar cor" className="cursor-pointer" />
          </button>
          {isOpenSelectColors && (
            <SelectColors
              selectedColor={toDo.colors}
              onColorChange={(colors) => updateCard(toDo.id, { colors })}
            />
          )}
        </div>
      </div>
    </div>
  );
}
