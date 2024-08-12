"use client";

import useData from "@/hooks/useData";
import DessertCard from "../dessertCard";

const Desserts = () => {
  const { data } = useData();

  return (
    <section>
      <h1 className="heading text-rose-900 mb-[26px] text-center md:text-left">
        Desserts
      </h1>
      <div className="w-full max-w-[808px] flex flex-wrap md:justify-between justify-center gap-y-8 gap-x-4">
        {data.map((dessert, index) => (
          <DessertCard
            quantity={dessert.quantity}
            key={index}
            category={dessert.category}
            image={dessert.image}
            name={dessert.name}
            price={dessert.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Desserts;
