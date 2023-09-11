"use client";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/index.js";

export default function RootLayout({ children }) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
