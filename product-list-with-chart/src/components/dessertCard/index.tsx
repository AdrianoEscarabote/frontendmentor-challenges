import Image from "next/image";
import { DessertCardProps } from "./DessertCardProps";
import AddToCartButton from "../addToCartButton";
import { useDispatch } from "react-redux";
import {
  addProduct,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/product/reducer";

const DessertCard = ({ ...data }: DessertCardProps) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(decreaseQuantity({ name: data.name }));
  };

  const handleIncreaseQuantity = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    dispatch(increaseQuantity({ name: data.name }));
  };

  return (
    <div className="max-w-[250px] flex flex-col gap-6 w-full">
      <div className="relative">
        <Image
          src={`${data.image.desktop}`}
          alt={data.name}
          priority={true}
          width={300}
          height={400}
          style={{ width: "auto", height: "auto" }}
          className="rounded-lg"
        />
        <div className="absolute -bottom-6 left-[46px]">
          <AddToCartButton
            onClick={() => dispatch(addProduct(data))}
            name={data.name}
            handleIncreaseQuantityFn={handleIncreaseQuantity}
            handleDecreaseQuantityFn={handleDecreaseQuantity}
          />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <p className="text-rose-500 bodyS font-normal mb-1">{data.category}</p>
        <p className="text-rose-900 body font-bold tracking-[-0.4px]">
          {data.name}
        </p>
        <p className="text-red body font-bold">${data.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DessertCard;
