"use client";

import { useCard } from "@/hooks/useCard.hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateFormValues } from "./interface";
import { FavoriteButton } from "@/components/editables/FavoriteButton";

export default function CardTitle() {
  const { addCard } = useCard();

  const { register, handleSubmit, setValue } = useForm<ICreateFormValues>();

  const submit: SubmitHandler<ICreateFormValues> = (formData) => {
    addCard({ ...formData, color: "white" });
  };

  return (
    <div className="flex flex-col items-center max-w-full mt-3 mx-auto min-w-full md:min-w-[250px] md:h-0">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full bg-white rounded-3xl border border-solid border-gray-300 shadow-md p-4"
      >
        <header className="flex w-full justify-between">
          <input
            type="text"
            placeholder="Título"
            className="font-bold w-full bg-transparent outline-none border-none"
            {...register("title")}
          />
          <div className="flex justify-around items-center gap-3 ">
            <FavoriteButton
              initialValue={false}
              onFavoriteChange={(isFavorite) => setValue("isFavorite", isFavorite)}
            />
          </div>
        </header>

        <textarea
          placeholder="criar nota..."
          className="outline-none border-none resize-none w-full"
          {...register("note")}
        ></textarea>
      </form>
    </div>
  );
}
