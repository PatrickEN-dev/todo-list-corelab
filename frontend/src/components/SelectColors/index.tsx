"use client";

import { useState } from "react";

interface SelectColorsProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colorOptions = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-gray-500",
  "bg-orange-500",
];

export default function SelectColors({ selectedColor, onColorChange }: SelectColorsProps) {
  const [isOpen, setIsOpen] = useState(true);

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
        <div className="absolute top-10 left-0 flex flex-wrap">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 ${color} rounded-full cursor-pointer mb-2 mr-2`}
              onClick={() => handleColorSelect(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
