import CardList from "@/components/Cards/CardList";
import CardTitle from "@/components/Cards/CardTitle";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col sm:w-[120%] px-[25%] h-auto md:block md:w-[1040px] md:h-full">
        <div className="md:max-w-xs md:pb-24 md:ml-14">
          <CardTitle />
        </div>
        <div className="md:flex md:flex-row md:w-full md:pt-6 md:max-w-3xl">
          <CardList />
        </div>
      </main>
    </>
  );
}
