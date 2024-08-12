"use client";

import Cart from "@/components/cart";
import Desserts from "@/components/desserts";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col max-w-[1440px] lg:px-[113px] px-5 mx-auto md:py-[82px] py-[40px] gap-[32px] w-full">
      <Provider store={store}>
        <Desserts />
        <Cart />
      </Provider>
    </main>
  );
}
