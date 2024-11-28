import ProductDetails from "../productDetails";
import ProductImages from "../productImages";

const Product = () => {
  return (
    <article>
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-center pb-10 md:flex-row md:items-start md:justify-between md:pb-0 md:pt-[5.5625rem] lg:px-[10.3125rem]">
        <ProductImages />
        <ProductDetails />
      </div>
    </article>
  );
};

export default Product;
