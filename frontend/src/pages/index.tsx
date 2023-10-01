import CardList from "@/components/Cards/CardList";
import CardTitle from "@/components/Cards/Title";

export default function Home() {
  return (
    <main className=" flex justify-center flex-col sm:w-[120%] px-[25%] h-auto md:flex-row">
      <CardTitle />
      <CardList />
    </main>
  );
}
