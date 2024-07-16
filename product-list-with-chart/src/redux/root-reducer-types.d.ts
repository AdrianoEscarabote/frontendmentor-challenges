interface productType {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface rootState {
  productsSlice: productType[];
}

export { productType, rootState };
