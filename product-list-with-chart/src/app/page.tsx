"use client";

import Cart from "@/components/cart";
import Desserts from "@/components/Desserts";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex max-w-[1440px] lg:px-[165px] px-5 mx-auto">
      <Provider store={store}>
        <Desserts />
        <Cart />
      </Provider>
    </main>
  );
}
