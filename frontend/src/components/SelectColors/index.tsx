"use client";

import { useState } from "react";
import { TSelectColorsProps } from "./types";
import { colorOptions } from "./data";

export default function SelectColors({ selectedColor, onColorChange }: TSelectColorsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelectColor = () => setIsOpen(!isOpen);

  const handleColorSelect = (color: string) => {
    onColorChange(color);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleSelectColor}
        className={`rounded-full w-[100px] h-8 border-2 border-gray-200 cursor-pointer ${selectedColor}`}
      ></button>
      {isOpen && (
        <div className="absolute top-10 left-0 grid grid-cols-4 gap-2 w-[200px] h-10 z-10">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 bg-${color.themeColor} text-${color.textColor} rounded-full cursor-pointer`}
              onClick={() => handleColorSelect(color.themeColor)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
