"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import Image from "next/image";
import StarEmpty from "@/assets/star-empty.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { useCard } from "@/hooks/useCard.hook";

export default function CardTitle() {
  const { addCard, note, title: initialTitle, setNote, colors } = useCard();
  const [title, setTitle] = useState(initialTitle);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleEnterKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addCard({
        title,
        note,
        isFavorite: false,
        colors,
      });
      setNote("");
    }
  };

  const handleTitleClick = () => setIsEditingTitle(true);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleTitleBlur = () => setIsEditingTitle(false);

  return (
    <div className="flex flex-col items-center max-w-md">
      <div className="w-full bg-white rounded-3xl border border-solid border-gray-300 shadow-md p-4">
        <header className="flex w-full justify-between">
          {isEditingTitle ? (
            <input
              type="text"
              className="font-bold w-full bg-transparent !focus:outline-none"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
            />
          ) : (
            <h4 className="font-bold" onClick={handleTitleClick}>
              Título
            </h4>
          )}
          <div className="flex justify-around items-center gap-3">
            <Image src={StarEmpty} alt="icon-favoritar" />
            <AiOutlineCheck />
          </div>
        </header>

        <textarea
          className="w-full p-2 border-none resize-none bg-transparent !focus:outline-none"
          placeholder="Criar nota..."
          value={note}
          onChange={handleNoteChange}
          onKeyDown={handleEnterKeyPress}
        ></textarea>
      </div>
    </div>
  );
}
