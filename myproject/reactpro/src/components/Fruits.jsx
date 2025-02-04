import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana"];
  const fruits = [
    { name: "Apple", price: 8, soldout: true },
    { name: "Banana", price: 10, soldout: false },
    { name: "Mango", price: 7, soldout: true },
    { name: "Pair", price: 3, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.name} ${fruit.price}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
