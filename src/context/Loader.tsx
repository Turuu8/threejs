import React, { createContext, useContext, useState } from "react";

const Loader = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return <Loader.Provider value={{ loading, setLoading }}>{children}</Loader.Provider>;
};

export const useLoader = () => useContext(Loader);
