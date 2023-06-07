import React, { createContext, useContext, useState, ReactNode } from "react";

const Loader = createContext<any | null>(null);

export const LoaderProvider = ({ children }:{ children : ReactNode}) => {
  const [loading, setLoading] = useState(false);

  return <Loader.Provider value={{ loading, setLoading }}>{children}</Loader.Provider>;
};

export const useLoader = () => useContext(Loader);
