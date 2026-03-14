"use client";

import React, { ReactNode } from "react";
import StoreProvider from "../state/redux";

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
};

export default Provider;