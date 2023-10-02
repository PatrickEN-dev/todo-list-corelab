"use client";

import { useState } from "react";
import { TSelectColorProps } from "./types";

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

export default function SelectColors({ onSelectColor }: TSelectColorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelectColor = () => setIsOpen(!isOpen);

  const handleColorSelect = (color: string) => {
    onSelectColor(color);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleSelectColor}
        className="rounded-full w-8 h-8 border-2 border-gray-200 cursor-pointer"
      ></button>
      {isOpen && (
        <div className="absolute top-10 left-0 flex space-x-2">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 ${color} rounded-full cursor-pointer`}
              onClick={() => handleColorSelect(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
