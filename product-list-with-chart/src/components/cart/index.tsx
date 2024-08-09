import { useSelector } from "react-redux";
import EmptyCart from "../emptyCart";
import CartList from "../cartLIst";
import { selectProductsCount } from "@/redux/product/product.selector";

const Cart = () => {
  const productsCount = useSelector(selectProductsCount);

  return (
    <section>
      <div className="bg-white rounded-xl w-full py-[30px] px-6 flex flex-col gap-5 min-w-[384px]">
        <h2 className="text-red headingS">Your Cart ({productsCount})</h2>

        {productsCount == 0 && <EmptyCart />}
        {productsCount >= 1 && <CartList />}
      </div>
    </section>
  );
};

export default Cart;
