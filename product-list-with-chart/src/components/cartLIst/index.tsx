import Image from "next/image";
import PrimaryButton from "../primaryButton";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";
import { removeProduct } from "@/redux/product/reducer";
import { selectProductsPrice } from "@/redux/product/product.selector";
import { useState } from "react";
import OrderModal from "../orderModal";

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
        <ul className="flex flex-col gap-3">
          {products &&
            products.map((product, index) => (
              <>
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-solid pb-2"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="bodyS text-rose-900">{product.name}</h4>

                    <div className="flex gap-3">
                      <p className="text-red">{product.quantity}x</p>

                      <p className="flex gap-3">
                        <span className="text-neutral-500">
                          @ $ {product.price.toFixed(2)}
                        </span>
                        <span>
                          $ {(product.price * product.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    className="border border-solid rounded-full h-full p-1"
                    onClick={() =>
                      dispatch(removeProduct({ name: product.name }))
                    }
                  >
                    <Image
                      src={"/images/icon-remove-item.svg"}
                      alt=""
                      width={40}
                      height={40}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                </li>
              </>
            ))}
        </ul>

        <div>
          <p className="flex justify-between bodyS font-normal">
            Order Total{" "}
            <span className="bodyM text-rose-900">
              $ {productsPrice.toFixed(2)}
            </span>
          </p>
        </div>

        <div className="bg-rose-50 flex justify-center gap-2 p-3 rounded-lg">
          <Image
            src={"/images/icon-carbon-neutral.svg"}
            alt=""
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
          />

          <p className="bodyS font-normal text-rose-900">
            This is a{" "}
            <span className="font-bold text-rose-900 bodyS">
              carbon-neutral
            </span>{" "}
            delivery
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
