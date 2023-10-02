"use client";

import { useState } from "react";
import Image from "next/image";
import EditTextIcon from "@/assets/edit-text.svg";
import EditColorIcon from "@/assets/change-color-icon.svg";
import FavoriteIcon from "@/assets/star-empty.svg";
import { TCard } from "@/context/Card/interfaces";
import { useCard } from "@/hooks/useCard.hook";
import SelectColors from "@/components/SelectColors";

interface CardProps extends TCard {}

export default function Card({ id, title: initialTitle, note: initialNote }: CardProps) {
  const { updateCard, deleteCard } = useCard();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [note, setNote] = useState(initialNote);

  const handleTitleChange = (newTitle: string) => setTitle(newTitle);

  const handleNoteChange = (newNote: string) => setNote(newNote);

  const saveTitle = () => {
    updateCard(id, { title, note });
    setIsEditingTitle(false);
  };

  const saveNote = () => {
    updateCard(id, { title, note });
    setIsEditingNote(false);
  };

  return (
    <div className="">
      <header className="flex w-full justify-between">
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            onBlur={saveTitle}
          />
        ) : (
          <h4 className="font-bold cursor-pointer" onClick={() => setIsEditingTitle(true)}>
            {title}
          </h4>
        )}
        <Image src={FavoriteIcon} alt="favoritar" />
      </header>
      {isEditingNote ? (
        <textarea
          className="w-full p-2 border-none resize-none bg-transparent !focus:outline-none"
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
      <div className="border-t-2 h-4 flex justify-between px-1">
        <div>
          <button type="button" onClick={() => setIsEditingTitle(true)}>
            <Image src={EditTextIcon} alt="editar text" />
          </button>

          <button
            type="button"
            onClick={() => (
              <SelectColors
                onSelectColor={function (color: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
          >
            <Image src={EditColorIcon} alt="editar cor" />
          </button>
        </div>
        <button type="button" onClick={() => deleteCard(id)}>
          X
        </button>
      </div>
    </div>
  );
}
