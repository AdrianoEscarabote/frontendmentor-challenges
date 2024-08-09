import Image from "next/image";
import PrimaryButton from "../primaryButton";
import OrderList from "../orderList";
import { useEffect, useRef } from "react";
import { OrderModalProps } from "./OrderModalProps";
import { useDispatch } from "react-redux";
import { cleanProducts } from "@/redux/product/reducer";

const OrderModal = ({ closeModal }: OrderModalProps) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      onClick={() => {
        closeModal();
      }}
      className="absolute bottom-0 right-0 h-screen w-full flex items-center justify-center bg-[#1d1d1d93]"
    >
      <section
        ref={modalRef}
        tabIndex={0}
        role="dialog"
        aria-label="order modal"
        aria-describedby="modal-content"
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-10 py-10 rounded-lg w-full max-w-[592px]"
      >
        <Image
          src={"/images/icon-order-confirmed.svg"}
          alt=""
          className="pb-4"
          style={{ width: "auto", height: "auto" }}
          width={60}
          height={60}
        />
        <h3 className="heading text-rose-900">Order Confirmed</h3>
        <p>We hope you enjoy your food!</p>

        <OrderList />

        <PrimaryButton
          aria-label="start new order button"
          label="Start New Order"
          data-testid="closeModalButton"
          onClick={() => {
            dispatch(cleanProducts());
            closeModal();
          }}
        />
      </section>
    </div>
  );
};

export default OrderModal;
