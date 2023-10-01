import CardTitle from "../Title";

export default function CardList() {
  return (
    <>
      <section>
        <h4>Favoritos</h4>
        <ul>
          <li className="">
            <CardTitle />
          </li>
          <li>
            <CardTitle />
          </li>
        </ul>
      </section>

      <section>
        <h4>Outros</h4>
        <ul>
          <li className="space-y-6">
            <CardTitle />
          </li>
          <li>
            <CardTitle />
          </li>

          <li>
            <CardTitle />
          </li>

          <li>
            <CardTitle />
          </li>

          <li>
            <CardTitle />
          </li>

          <li>
            <CardTitle />
          </li>
        </ul>
      </section>
    </>
  );
}
