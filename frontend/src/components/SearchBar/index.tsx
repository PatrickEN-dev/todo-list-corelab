"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useCard } from "@/hooks/useCard.hook";
import { IEditFormValues } from "@/@types/global";
import Image from "next/image";
import MagnifyingGlassButton from "@/assets/magnifying-glass.svg";

export default function SearchBar() {
  const { filterCardSearchBar, setSearchCards } = useCard();
  const { handleSubmit, register } = useForm<IEditFormValues>();

  const onSubmit: SubmitHandler<IEditFormValues> = (data) => {
    const inputValue = data.value.toLowerCase();
    setSearchCards(inputValue);
    filterCardSearchBar();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="pesquise notas"
            {...register("value")}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-slate-300"
          >
            <Image src={MagnifyingGlassButton} alt="Ícone de pesquisa" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
