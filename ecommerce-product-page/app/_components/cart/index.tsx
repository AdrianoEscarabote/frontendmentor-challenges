"use client";

import Image from "next/image";
import Button from "../button";
import { CartProps } from "./cartProps";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/redux/reduxTypes";
import { removeProduct } from "@/redux/product/reducer";
import { selectProductsCount } from "@/redux/product/product.selector";

const Cart = ({ isOpen, setIsOpen }: CartProps) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (rootReducer: rootState) => rootReducer.productSlice,
  );
  const productsCount = useSelector(selectProductsCount);

  const handleRemoveProduct = (name: string) => {
    dispatch(
      removeProduct({
        name: name,
      }),
    );
  };

  return (
    <div className="md:relative">
      <article>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-[1.4375rem] w-[1.4375rem]"
        >
          {productsCount >= 1 && (
            <span className="absolute -top-2 left-3 z-50 flex w-5 items-center justify-center rounded-full bg-primary-orange py-0 text-xs text-neutral-white">
              {productsCount}
            </span>
          )}
          <Image src={"/images/icon-cart.svg"} alt="" fill />
        </button>
      </article>
      {isOpen && (
        <div className="absolute left-2 top-24 z-50 w-[96%] rounded-lg bg-neutral-white shadow-2xl md:-left-[10.1875rem] md:top-12 md:w-[22.3125rem]">
          <p className="p-6 font-bold text-neutral-very-dark-blue">Cart</p>
          <div className="h-[0.125rem] w-full bg-neutral-light-grayish-blue"></div>
          <div className="flex flex-col p-6">
            {products.length === 0 ? (
              <p className="py-[3.75rem] text-center font-bold text-neutral-dark-grayish-blue">
                Your cart is empty.
              </p>
            ) : (
              <>
                <ul>
                  {products.map((product) => (
                    <li
                      key={product.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex gap-4">
                        <Image
                          src={"/images/image-product-1-thumbnail.jpg"}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                        <div className="flex flex-col gap-0 text-neutral-dark-grayish-blue">
                          <p>{product.name}</p>

                          <div className="flex gap-3">
                            <p>
                              ${product.price.toFixed(2)} x
                              <span> {product.quantity}</span>
                            </p>

                            <p className="font-bold text-neutral-very-dark-blue">
                              ${(product.price * product.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="relative h-[0.9375rem] w-[0.875rem]"
                        onClick={() => handleRemoveProduct(product.name)}
                      >
                        <Image src={"/images/icon-delete.svg"} alt="" fill />
                      </button>
                    </li>
                  ))}
                </ul>
                <Button label="Checkout" className="mt-6" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
