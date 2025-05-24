import Card from "./card.jsx";
import cardData from "../assets/card-data";
import Counter from "./counter.jsx";

export default function Body() {

  return (
    <div className="bg-blue-300"     >
        <Counter />
      {/*cardData.map((card) => (
        <Card
          key={card.title}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))*/}
    </div>
  );
}