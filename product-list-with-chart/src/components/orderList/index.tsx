"use client";

import { selectProductsPrice } from "@/redux/product/product.selector";
import { rootState } from "@/redux/root-reducer-types";
import Image from "next/image";
import { useSelector } from "react-redux";

const OrderList = () => {
  const productsPrice = useSelector(selectProductsPrice);
  const products = useSelector(
    (rootReducer: rootState) => rootReducer.productsSlice
  );

  return (
    <div className="my-10 p-4 bg-rose-50 flex flex-col gap-5">
      <ul className="flex flex-col gap-3 px-2">
        {products.map((product, index) => (
          <li key={index} className="border-b border-solid pb-4">
            <div className="flex justify-between ">
              <div className="flex gap-4">
                <Image
                  src={`${product.image.thumbnail}`}
                  width={52}
                  height={48}
                  alt=""
                  className="rounded-[4px]"
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="flex flex-col ">
                  <p className="bodyS text-rose-900">{product.name}</p>
                  <p className="flex text-red font-bold gap-2 bodyS">
                    {product.quantity}x
                    <span className="text-rose-500 font-normal">
                      @ ${product.price.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <p className="body font-bold text-rose-900">
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="flex justify-between px-2 bodyS text-rose-500">
        Order Total{" "}
        <span className="bodyM text-rose-900">${productsPrice.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default OrderList;
