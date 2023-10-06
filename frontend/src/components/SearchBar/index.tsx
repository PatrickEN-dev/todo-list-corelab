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
        <div className="relative md:w-[300px]">
          <input
            type="search"
            id="search-dropdown"
            className="block p-3 w-full border-[2px]"
            placeholder="Pesquisar notas"
            {...register("value")}
            style={{
              paddingRight: "40px",
            }}
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
