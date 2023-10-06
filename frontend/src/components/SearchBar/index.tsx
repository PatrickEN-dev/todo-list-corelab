"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import MagnifyingGlassButton from "@/assets/magnifying-glass.svg";
import { IEditFormValues } from "@/@types/global";
import { useRouter } from "next/router";

export default function SearchBar() {
  const { register, handleSubmit } = useForm<IEditFormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IEditFormValues> = (data) => {
    router.push("/", { query: { search: data.value } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Pesquisar notas"
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
