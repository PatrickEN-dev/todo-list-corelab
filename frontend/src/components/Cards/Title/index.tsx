import { useState, ChangeEvent } from "react";
import Image from "next/image";
import StarEmpty from "@/assets/star-empty.svg";
import { AiOutlineCheck } from "react-icons/ai";

export default function CardTitle() {
  const [note, setNote] = useState<string>("");
  let typingTimeout: NodeJS.Timeout | null = null;

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);

    if (typingTimeout) clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => console.log("Nota salva:", note), 2000);
  };

  return (
    <div className="flex flex-col items-center max-w-md">
      <div className="w-full bg-white rounded-3xl border border-solid border-gray-300 shadow-md p-4">
        <header className="flex w-full justify-between">
          <h4 className="font-bold">{note}</h4>
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
        ></textarea>
      </div>
    </div>
  );
}
