"use client";

import Image from "next/image";
import Button from "../button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/product/reducer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const decreaseCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const increaseCounter = () => {
    if (counter >= 10) return;

    setCounter(counter + 1);
  };

  const handleAddProduct = () => {
    if (counter === 0) return;
    dispatch(
      addProduct({
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
        quantity: counter,
      }),
    );
  };

  return (
    <section className="max-w-[27.8125rem] px-5 md:mr-12 lg:px-0">
      <div className="mt-[3.625rem]">
        <span className="text-[0.8125rem] font-bold uppercase tracking-[0.125rem] text-neutral-dark-grayish-blue">
          Sneaker Company
        </span>
        <h1 className="mb-9 mt-4 text-[2.375rem] font-bold leading-[3rem] tracking-[0.0313rem] text-neutral-very-dark-blue md:text-[2.6875rem]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mb-5 leading-[1.625rem] text-neutral-dark-grayish-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-normal">
          <p className="relative top-[0.0625rem] mb-4 flex w-full gap-[0.9375rem] text-3xl font-bold text-neutral-very-dark-blue">
            <span className="tracking-[0.0187rem]">$125.00</span>

            <span className="relative bottom-[0.125rem] grid h-[1.6875rem] w-[3.1875rem] place-content-center self-end rounded-md bg-neutral-very-dark-blue pt-[0.125rem] text-[0.9375rem] text-white">
              50%
            </span>
          </p>
          <p className="relative -top-1 font-bold text-neutral-dark-grayish-blue line-through">
            $250.00
          </p>
        </div>
        <div className="mt-[1.75rem] flex flex-col gap-5 md:flex-row">
          <div className="flex w-full justify-between rounded-lg bg-neutral-light-grayish-blue py-3 pl-4 pr-3 md:max-w-[9.625rem]">
            <button className="relative" onClick={decreaseCounter}>
              <Image
                src={"/images/icon-minus.svg"}
                alt=""
                width={13}
                height={13}
              />
            </button>

            <p className="mt-[0.3125rem] font-bold text-neutral-very-dark-blue">
              {counter}
            </p>

            <button className="relative" onClick={increaseCounter}>
              <Image
                src={"/images/icon-plus.svg"}
                alt=""
                width={13}
                height={13}
              />
            </button>
          </div>
          <Button
            label="Add to cart"
            showIcon={true}
            onClick={handleAddProduct}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
