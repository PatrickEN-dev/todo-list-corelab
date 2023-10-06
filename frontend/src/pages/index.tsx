import CardList from "@/components/Cards/CardList";
import CardTitle from "@/components/Cards/CardTitle";

export default function Home() {
  return (
    <main className="flex justify-center flex-col sm:w-[120%] px-[25%] h-auto md:flex-row md:w-full md:h-full">
      <CardTitle />
      <div className="mt-[35%] md:flex md:flex-row">
        <CardList />
      </div>
    </main>
  );
}
