import Image from "next/image";
import { AddToCartButtonProps } from "./AddToCartButtonProps";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";

const AddToCartButton = ({
  onClick,
  handleDecreaseQuantityFn,
  handleIncreaseQuantityFn,
  name,
}: AddToCartButtonProps) => {
  const product = useSelector(
    (rootReducer: rootState) =>
      rootReducer.productsSlice.filter((product) => product.name === name)[0]
  );

  const [showButtons, setShowButtons] = useState<boolean>(
    product?.quantity > 0
  );

  useEffect(() => {
    setShowButtons(product?.quantity > 0);
  }, [product?.quantity]);

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    setShowButtons(true);
  };

  const handleDecreaseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(product?.quantity);
    if (handleDecreaseQuantityFn) {
      handleDecreaseQuantityFn(event);
    }
    setTimeout(() => {
      if (product?.quantity <= 1) {
        setShowButtons(false);
      }
    }, 0);
  };

  return (
    <div
      className={`${
        showButtons
          ? "bg-red border-red"
          : "bg-white border border-solid border-rose-500"
      } border border-solid rounded-full h-[45px] w-40 flex items-center hover:border-red`}
    >
      {showButtons ? (
        <div className="w-full flex justify-between items-center px-4">
          <button
            data-testid="decrementButton"
            aria-label="decrement product quantity"
            onClick={handleDecreaseClick}
            className={`${style.button} hover:bg-white border border-solid rounded-full h-5 w-5 flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>

          <p className="text-white font-semibold">{product?.quantity}</p>

          <button
            data-testid="incrementButton"
            aria-label="increment product quantity"
            onClick={handleIncreaseQuantityFn}
            className={`${style.button} hover:bg-white border border-solid rounded-full h-5 w-5 flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          data-testid="addToCartButton"
          onClick={handleAddToCartClick}
          className="h-[45px] w-40 rounded-full mx-auto flex items-center justify-center gap-[6px] text-rose-900 hover:text-red transition-none"
        >
          <Image
            src={"/images/icon-add-to-cart.svg"}
            alt=""
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
          />
          <span className="text-sm font-bold">Add to Cart</span>
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
