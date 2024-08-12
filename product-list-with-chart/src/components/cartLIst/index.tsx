import Image from "next/image";
import PrimaryButton from "../primaryButton";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { removeProduct } from "@/redux/product/reducer";
import { selectProductsPrice } from "@/redux/product/product.selector";
import { useState } from "react";
import OrderModal from "../orderModal";
import style from "./style.module.css";

const CartList = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (rootReducer: rootState) => rootReducer.productsSlice
  );
  const productsPrice = useSelector(selectProductsPrice);

  const [showOrderModal, setShowOrderModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-4">
          {products &&
            products.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-solid pb-4"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="bodyS text-rose-900 tracking-[-0.4px] font-bold mb-[1px]">
                    {product.name}
                  </h4>

                  <div className="flex gap-[10px]">
                    <p className="text-red bodyS font-bold">
                      {product.quantity}x
                    </p>

                    <p className="flex gap-3 bodyS">
                      <span className="text-rose-500 font-light">
                        @ ${product.price.toFixed(2)}
                      </span>
                      <span className="text-rose-900 font-normal">
                        $ {(product.price * product.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  className={`${style.button} border border-solid border-rose-400 rounded-full h-full p-1 hover:border-rose-900`}
                  onClick={() =>
                    dispatch(removeProduct({ name: product.name }))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#CAAFA7"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </button>
              </li>
            ))}
        </ul>

        <div>
          <p className="flex justify-between bodyS font-normal">
            Order Total{" "}
            <span className="bodyM text-rose-900">
              ${productsPrice.toFixed(2)}
            </span>
          </p>
        </div>

        <div className="bg-rose-50 flex justify-center gap-2 p-3 rounded-lg mt-5 mb-3">
          <Image
            src={"/images/icon-carbon-neutral.svg"}
            alt=""
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
          />

          <p className="bodyS font-normal text-rose-900">
            This is a <span className="font-bold">carbon-neutral</span> delivery
          </p>
        </div>

        <PrimaryButton
          label="Confirm Order"
          onClick={() => setShowOrderModal(true)}
          aria-label="confirm order button"
          disabled={products.length === 0 ? true : false}
        />
      </div>
      {showOrderModal && (
        <OrderModal closeModal={() => setShowOrderModal(!OrderModal)} />
      )}
    </>
  );
};

export default CartList;
