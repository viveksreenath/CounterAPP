import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const data = [
    {
      title: "Audi Q7",
      image: "/car.jpg",
      description:
        "Audi Q7 Variants: It is available in two trims: Premium Plus and Technology. Audi Q7 Seating Capacity: It is a 7-seater. Audi Q7 Engine and Transmission",
    },
    {
      title: "Benz E Class",
      image: "/car2.jpg",
      description:
        "Mercedes-Benz E-Class is offered in 3 variants - the base model of E-Class is Exclusive E 200 and the top variant Mercedes-Benz E-Class Elite E 350d which comes at a price tag of Rs. 88 Lakh.",
    },
    {
      title: "BMW M5",
      image: "/car3.jpg",
      description:
        "The BMW M5 is a high performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category.",
    },
  ];
  const cards = data.map((item) => (
    <Card
      title={item.title}
      description={item.description}
      image={item.image}
    />
  ));
  return (
    <>
      <Navbar />
      <div className="cardclass">{cards}</div>
      <Counter />
    </>
  );
};

export default App;
