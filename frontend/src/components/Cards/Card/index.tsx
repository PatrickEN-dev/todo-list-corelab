import React, { useState } from "react";
import Image from "next/image";
import FavoriteIcon from "@/assets/star-empty.svg";
import StarActivated from "@/assets/star-color.svg";
import { TCard } from "@/context/Card/interfaces";
import { useCard } from "@/hooks/useCard.hook";
import SelectColors from "@/components/SelectColors";
import EditTextIcon from "@/assets/edit-text.svg";
import EditColorIcon from "@/assets/change-color-icon.svg";

interface CardProps extends TCard {}

export default function Card({
  id,
  title: initialTitle,
  note: initialNote,
  isFavorite: initialIsFavorite,
  colors: initialColor,
}: CardProps) {
  const { updateCard, deleteCard } = useCard();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [note, setNote] = useState(initialNote);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [isOpenSelectColors, setIsOpenSelectColors] = useState(false);

  const handleTitleChange = (newTitle: string) => setTitle(newTitle);

  const handleNoteChange = (newNote: string) => setNote(newNote);

  const toggleFavorite = () => {
    const updatedIsFavorite = !isFavorite;
    setIsFavorite(updatedIsFavorite);
    updateCard(id, { title, note, isFavorite: updatedIsFavorite, colors: selectedColor });
  };

  const saveTitle = () => {
    updateCard(id, { title, note, isFavorite, colors: selectedColor });
    setIsEditingTitle(false);
  };

  const saveNote = () => {
    updateCard(id, { title, note, isFavorite, colors: selectedColor });
    setIsEditingNote(false);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    updateCard(id, { title, note, isFavorite, colors: color });
  };

  const toggleSelectColors = () => setIsOpenSelectColors(!isOpenSelectColors);

  return (
    <div className={`h-[300px] p-4 bg-${selectedColor} rounded-lg shadow-lg m-2 relative`}>
      <header className="flex justify-between items-center">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            onBlur={saveTitle}
            className="w-1/2 text-left"
          />
        ) : (
          <h2
            className="w-1/2 text-left text-xl font-semibold cursor-pointer"
            onClick={() => setIsEditingTitle(true)}
          >
            {title}
          </h2>
        )}
        <div className="flex items-center">
          <Image
            src={isFavorite ? StarActivated : FavoriteIcon}
            alt="favoritar"
            onClick={toggleFavorite}
            className="cursor-pointer mr-2"
          />
          <button type="button" onClick={() => deleteCard(id)} className="text-red-500">
            X
          </button>
        </div>
      </header>
      {isEditingNote ? (
        <textarea
          className="w-full h-40 p-2 border-none resize-none bg-transparent !focus:outline-none mt-4 mb-2"
          placeholder="Criar nota..."
          value={note}
          onChange={(e) => handleNoteChange(e.target.value)}
          onBlur={saveNote}
        />
      ) : (
        <div
          className="w-full p-2 border-none resize-none bg-transparent !focus:outline-none cursor-pointer"
          onClick={() => setIsEditingNote(true)}
        >
          {note}
        </div>
      )}
      <div className="border-t-2 mt-2 flex justify-between items-center absolute bottom-2 left-2 right-2">
        <div className="flex items-center space-x-2">
          <button type="button" onClick={() => setIsEditingTitle(true)} className="text-blue-500">
            <Image src={EditTextIcon} alt="editar texto" className="cursor-pointer" />
          </button>
          <button type="button" onClick={toggleSelectColors} className="text-blue-500">
            <Image src={EditColorIcon} alt="editar cor" className="cursor-pointer" />
          </button>
          {isOpenSelectColors && (
            <SelectColors selectedColor={selectedColor} onColorChange={handleColorSelect} />
          )}
        </div>
      </div>
    </div>
  );
}
