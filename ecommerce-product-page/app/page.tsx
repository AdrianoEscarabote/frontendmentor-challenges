"use client";

import store from "@/redux/store";
import Header from "./_components/header";
import Product from "./_components/product";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Product />
      </main>
    </Provider>
  );
}
