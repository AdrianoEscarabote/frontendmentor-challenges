import Image from "next/image";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[14px] mt-3 mb-2">
      <Image
        src={"/images/illustration-empty-cart.svg"}
        width={80}
        height={80}
        alt=""
        data-testid="image"
        style={{ width: "auto", height: "auto" }}
      />
      <p data-testid="paragraph" className="bodyS text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
