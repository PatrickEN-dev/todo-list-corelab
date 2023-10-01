import { useCard } from "@/hooks/useCard.hook";

export default function Card() {
  const { notes } = useCard();

  return (
    <li>
      <div className="rounded-3xl border border-solid border-gray-300 shadow-md p-4">
        <header className="flex w-full justify-between">
          <h4 className="font-bold">{notes}</h4>
        </header>
        <textarea
          className="w-full p-2 border-none resize-none bg-transparent !focus:outline-none"
          placeholder="Criar nota..."
        ></textarea>
      </div>
    </li>
  );
}
