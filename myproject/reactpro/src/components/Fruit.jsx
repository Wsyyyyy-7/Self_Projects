export default function Fruit({ name, price , soldout}) {
  return (
    <>
      {/* {name} ${price} */}

      {price > 5 ? (
        <li>
          {name} ${price} {soldout ? "souldOut" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
